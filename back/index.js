const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const User = require('./class/user');

let userDb = JSON.parse(fs.readFileSync('./db/user.json', 'utf8'));


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../livecampus-crm/dist')));

app.listen(5000, () => {
  console.log(userDb)
  console.log('listening on 5000');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../livecampus-crm/dist/index.html'));
});

app.get('/api/users', (req, res) => {
  console.log('Get all users');
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
  let user
  try {
    user = new User(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.phoneNumber
    )
  } catch (error) {
    res.status(400).send(error.message);
  }
  userDb.push(user);
  fs.writeFileSync('./db/user.json', JSON.stringify(userDb, null, 2));
  res.status(201).json(user);
});

app.put('/api/users/:id', (req, res) => {
  const user = userDb.find(user => user.id === req.params.id);
  if (user) {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phoneNumber = req.body.phoneNumber;
    fs.writeFileSync('./db/user.json', JSON.stringify(userDb, null, 2));
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/api/users/:id', (req, res) => {
  const user = userDb.find(user => user.id === req.params.id);
  if (user) {
    userDb = userDb.filter(user => user.id !== req.params.id);
    fs.writeFileSync('./db/user.json', JSON.stringify(userDb, null, 2));
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

