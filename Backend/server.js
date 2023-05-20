const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {

  const query = 'SELECT * FROM service';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error executing query');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/** check if session exist */

app.get("/login", (req, res) => {
  if (req.session.user) {
      res.send({
          loggedIn: true,
          picture: req.session.user[0].picture,
          firstname: req.session.user[0].firstname,
          lastname: req.session.user[0].lastname
      })
  } else {
      res.send({
          loggedIn: false
      })
  }
})

/** login script */

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM users WHERE `username` = ? and `password` = ?";
  db.query(sqlSelect, [username, password], (err, result) => {
      if (err) {
          res.send({
              err: err
          })
      } else {
          if (result.length == 0) {
              res.send({
                  message: "Authentication failed"
              })
          } else {
              req.user = result;
              res.send(result);
          }
      }
  });
});