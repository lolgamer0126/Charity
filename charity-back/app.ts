import express, {Express, query, Request, Response} from 'express'
import session, { Cookie } from 'express-session'
import passport, { use } from 'passport'
import GoogleStrategy from 'passport-google-oauth'
import cors from 'cors';
import cookieParser from 'cookie-parser'
import { v4 as uuidv4 } from 'uuid';
import pool from './database/db'
import bodyParser from 'body-parser';

export interface TypedRequestUser<T extends Express.User> extends Express.Request {
  user: T
}
const app = express();
const GOOGLE_CLIENT_ID = '411255982749-uem7h7b4j3h8ngone58qs2dnlcvejrql.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const GoogleOauth = GoogleStrategy.OAuth2Strategy

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
  credentials: true
}))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
    cookie:{
      secure: false,
      httpOnly: false
    }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleOauth({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://ochmo.website:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      const userProfile = profile;
      return done(null, userProfile);
  }
));

app.get('/', function(req, res) {
  const userID = req.headers.cookie?.substring(5, 41)
  res.json({message: "atleast it's working"});
});
  
app.get('/success', (req, res) => res.send(req.user));
app.get('/error', (req, res) => res.send("error logging in"));
// app.get('/auth/google', 
//   passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google', (req, res)=>{
  console.log('req arrived')
  return passport.authenticate('google', { scope : ['profile', 'email'] })

});
 

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  async function(req: TypedRequestUser<{
    displayName: string, photos: any, emails: any
  }>, res: any) {
    const user = req.user;
    const username = user.displayName;
    const email = user.emails[0].value;
    const photo = user.photos[0].value;
    try{
      const check = await pool.query(
        `SELECT uniqueID FROM users WHERE email='${email}'`
      )
      if(check.rowCount){
        res.cookie('user', check.rows[0].uniqueid).redirect('http://ochmo.website:3000/')
      }
      else{
        const uniqueID = uuidv4()
        const resp = await pool.query(
          `INSERT INTO users (username, email, photo, uniqueID) VALUES ('${username}', '${email}', '${photo}', '${uniqueID}')`
        );
        res.cookie('user', uniqueID).redirect('http://ochmo.website:3000/');
      }
    }
    catch(error){
      console.log(error);
    }
    
});

app.post('/getuserdetails', async (req:Request, res: Response)=>{
  const userID = req.body.cookie
  if(userID!='unauthenticated'){
    const result = await pool.query(`SELECT * FROM users WHERE uniqueID = '${userID}'`)
    res.json({user: result.rows[0]})
  }
  else{
    res.json({user: 'unauthenticated'})
  }
})

passport.serializeUser(function(user:Express.User, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj:Express.User, cb) {
    cb(null, obj);
});

app.listen(8000, ()=>{
    console.log('api working on http://ochmo.website:8000');
})


