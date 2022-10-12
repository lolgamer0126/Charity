import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import sql from './database/db';

const app = express();
app.listen(5000, ()=>{
    console.log('web working on 5000')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
  credentials: true
}))

app.get('/', (req ,res)=>{
    res.send('hiiiii');
    //CREATE TABLE shop(username VARCHAR(255), address VARCHAR(255), email VARCHAR(255), productname VARCHAR(255), category VARCHAR(255), description VARCHAR(1000), features VARCHAR(1000), pictures VARCHAR(1000))
    sql.query('', (err, result)=>{
        if (err) throw err;

        console.log(result);
    });
})

app.post('/additem', (req, res) =>{
    console.log(req.body);
} )