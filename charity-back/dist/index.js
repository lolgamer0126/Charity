"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./database/db"));
const app = (0, express_1.default)();
app.listen(5000, () => {
    console.log('web working on 5000');
});
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    credentials: true
}));
app.get('/', (req, res) => {
    res.send('hiiiii');
    //CREATE TABLE shop(username VARCHAR(255), address VARCHAR(255), email VARCHAR(255), productname VARCHAR(255), category VARCHAR(255), description VARCHAR(1000), features VARCHAR(1000), pictures VARCHAR(1000))
    db_1.default.query('', (err, result) => {
        if (err)
            throw err;
        console.log(result);
    });
});
app.post('/additem', (req, res) => {
    console.log(req.body);
});
