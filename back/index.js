const express = require('express');
const app = express();
const userDb = require('./db/user.json');

const User = require('./class/user');


app.use(express.json());

app.listen(5000, () => {
  console.log('listening on 5000');
});

app.get('/api/users', (req, res) => {
  res.json(userDb);
});

app.get('/api/users/:id', (req, res) => {
  const user = userDb.find(user => user.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/api/users', (req, res) => {
  const user = new User(
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.phoneNumber
  )
  userDb.push(user);
  res.status(201).json(user);
});

