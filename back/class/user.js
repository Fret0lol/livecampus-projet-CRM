const { v4: uuidV4 } = require('uuid');

class User {
  constructor(firstName, lastName, email, phoneNumber = '') {
    if (firstName === '') {
      throw new Error('firstName is required');
    }
    if (lastName === '') {
      throw new Error('lastName is required');
    }
    if (email === '') {
      throw new Error('email is required');
    } else if (!this.isEmailValid(email)) {
      throw new Error('email is not valid');
    }
    this.id = uuidV4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;

    return this;
  }

  isEmailValid(email) {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;
  }
}

module.exports = User;