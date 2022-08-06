"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth_1 = __importDefault(require("passport-google-oauth"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const uuid_1 = require("uuid");
const db_1 = __importDefault(require("./database/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const GOOGLE_CLIENT_ID = '411255982749-uem7h7b4j3h8ngone58qs2dnlcvejrql.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const GoogleOauth = passport_google_oauth_1.default.OAuth2Strategy;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true
}));
app.use((0, express_session_1.default)({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET',
    cookie: {
        secure: false,
        httpOnly: false
    }
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
passport_1.default.use(new GoogleOauth({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://ochmo.website:8000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    const userProfile = profile;
    return done(null, userProfile);
}));
app.get('/', function (req, res) {
    var _a;
    const userID = (_a = req.headers.cookie) === null || _a === void 0 ? void 0 : _a.substring(5, 41);
    // console.log(userID);
    res.json({ message: "atleast it's working" });
});
app.get('/success', (req, res) => res.send(req.user));
app.get('/error', (req, res) => res.send("error logging in"));
app.get('/auth/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/error' }), function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        const username = user.displayName;
        const email = user.emails[0].value;
        const photo = user.photos[0].value;
        try {
            const check = yield db_1.default.query(`SELECT uniqueID FROM users WHERE email='${email}'`);
            if (check.rowCount) {
                res.cookie('user', check.rows[0].uniqueid).redirect('http://ochmo.website:3000/');
            }
            else {
                const uniqueID = (0, uuid_1.v4)();
                const resp = yield db_1.default.query(`INSERT INTO users (username, email, photo, uniqueID) VALUES ('${username}', '${email}', '${photo}', '${uniqueID}')`);
                res.cookie('user', uniqueID).redirect('http://ochmo.website:3000/');
            }
        }
        catch (error) {
            console.log(error);
        }
    });
});
app.post('/getuserdetails', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userID = req.body.cookie;
    if (userID != 'unauthenticated') {
        const result = yield db_1.default.query(`SELECT * FROM users WHERE uniqueID = '${userID}'`);
        res.json({ user: result.rows[0] });
    }
    else {
        res.json({ user: 'unauthenticated' });
    }
}));
passport_1.default.serializeUser(function (user, cb) {
    cb(null, user);
});
passport_1.default.deserializeUser(function (obj, cb) {
    cb(null, obj);
});
app.listen(8000, () => {
    console.log('api working on http://ochmo.website:8000');
});
