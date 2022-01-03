/// <reference types="cypress" />

import { ActionRest } from '../actions/ActionRest'
import { GeraDoc } from '../utils/docs'

const action = new ActionRest
const doc = new GeraDoc
const {
	Given,
	When,
	Then
} = require("cypress-cucumber-preprocessor/steps");

let name
let username
let password
let id

//Create User

Given(/^i want create a new user$/, () => {
	console.log('POST')
});

When(/^i inform the datas$/, () => {
	name = doc.getNome()
	username = doc.getEmail()
	password = doc.getSenha()
});

When(/^send request$/, () => {
	action.restCreateUser(name, username, password)
});

Then(/^has user is created success$/, () => {

});


// Login JWT Token

Given(/^i inform my user and password$/, () => {
	username = 'dansantty@uorak.com'
	password = 'D1601y2401*'
});

When(/^i send request$/, () => {
	action.restLogin(username, password)
});

Then(/^the login is success$/, () => {

});

Then(/^Jwt token is returned$/, () => {

});

// Find user by Id


Given(/^that I want to find a user by id$/, () => {
	return true;
});

When(/^I pass the user id$/, () => {
	id = 1
	action.findById(id)
});

When(/^I submit a request$/, () => {
	return true;
});

Then(/^I will have the user returned successfully$/, () => {
	return true;
});

// Find user by username


Given(/^that I want to find a user username$/, () => {
	return true;
});

When(/^I send the request$/, () => {
	username = 'fernando@uorak.com'
	action.findByUsername(username)
});

Then(/^I will have the user returned success$/, () => {
	return true;
});

// List all users

Given(/^that I want to return the list of all users$/, () => {
	return true;
});

When(/^I send this request$/, () => {
	action.listAllUsers()
});

Then(/^I will have a list containing all users returned with success$/, () => {
	return true;
});

// List all users pageable

Given(/^that I want to list all pageable users$/, () => {
	return true;
});

When(/^I send a request$/, () => {
	action.listAllUsersPageable()
});

Then(/^I will have the return of the pageable users list$/, () => {
	return true;
});

// Update user

Given(/^that i want to update user$/, () => {
	return true;
});

When(/^I pass the data$/, () => {
	return true;
});

When(/^click on request$/, () => {
	id = 2
	name = 'Fernandho'
	username = 'fernando@uorak.com'
	password = 'D1601y2401'
	action.updateUser(id, name, username, password)
});

Then(/^will i have the user updated successfully$/, () => {
	return true;
});

// Delete user

Given(/^that I want to delete a user$/, () => {
	return true;
});

When(/^submit a delete request$/, () => {
	action.deleteUser()
});

Then(/^I will have the user deleted$/, () => {
	return true;
});
