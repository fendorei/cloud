const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'postgres',
  password: '1948',
  port: 5432,
});

const getInfluencer = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM influenceurs ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

module.exports = {
  getInfluencer
}