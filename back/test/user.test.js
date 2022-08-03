const User = require('../class/user.js');

test('User class should be defined', () => {
  expect(User).toBeDefined();
});

test('User should be successfully created', () => {
  const user = new User('John', 'Doe', 'jdoe@gmail.com');
  expect(user).toBeDefined();
  expect(user.id).toBeDefined();
  expect(user.firstName).toBe('John');
  expect(user.lastName).toBe('Doe');
  expect(user.email).toBe('jdoe@gmail.com');
  expect(user.phoneNumber).toBe('');
});

test('User class should return error when firstName is not defined', () => {
  expect(() => {
    new User('', 'lastName', 'email', 'phoneNumber')
  }).toThrow('firstName is required');
});

test('User class should return error when lastName is not defined', () => {
  expect(() => {
    new User('firstName', '', 'email', 'phoneNumber')
  }).toThrow('lastName is required');
});

test('User class should return error when email is not defined', () => {
  expect(() => {
    new User('firstName', 'lastName', '', 'phoneNumber')
  }).toThrow('email is required');
});

test('User class should return error when email is not valid', () => {
  expect(() => {
    new User('firstName', 'lastName', 'email', 'phoneNumber')
  }).toThrow('email is not valid');
});