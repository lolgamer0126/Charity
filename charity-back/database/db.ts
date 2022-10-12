import mysql from 'mysql';

const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Charity"
});

sql.connect( (err) => {
  if (err) throw err;
  console.log("Connected!");
});
export default sql;