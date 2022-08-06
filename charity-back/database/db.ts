import { Pool } from 'pg'

const pool = new Pool({
  user: "ochmo",
  database: "test",
  password: "Nuuts123",
  port: 5432,
  host: "localhost",
});

export default pool;