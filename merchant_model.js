const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'my_database',
  password: '1948',
  port: 5432,
});