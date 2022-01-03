/// <reference types="cypress" />

const url = Cypress.config('baseUrl')
let token = null;
let id = null;

export class ActionRest {

  restCreateUser(nome, email, pass) {
    cy.request({
      url: 'user',
      method: 'POST',
      form: true,
      headers: {
        'Content-Type': ' application/json',
      },
      body: {
        "name": nome,
        "username": email,
        "password": pass
      },
      //failOnStatusCode: false
    }).then((response) => {
      id = response.body.id
      cy.log("Id " + id)

    })

  }

  restLogin(email, pass) {
     cy.request({
      url: 'auth/token',
      method: 'POST',
      form: true,
      headers: {
        'Content-Type': ' application/json',

      },
      body: {
        "username": email,
        "password": pass
      }
    }).then((response) => {
      token = response.body.access_token
      cy.log("Token: " + token)

    })
  }

  findById(id) {
    cy.request({
      url: `user/${id}`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((resId) => {
      expect(resId.status).to.eq(200);
      expect(resId.body).to.be.not.null;
    })
  }

  findByUsername(username) {
    cy.request({
      url: `user/username/${username}`,
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    }).then((resUsername) => {
      expect(resUsername.status).to.eq(200);
      expect(resUsername.body).to.be.not.null;
    })
  }

  listAllUsers() {
    cy.request({
      url: 'user',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((resUsers) => {
      expect(resUsers.status).to.eq(200);
      expect(resUsers.body).to.be.not.null;
    })
  }

  listAllUsersPageable() {
    cy.request({
      url: 'user/pageable',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      qs: {
        offset: 0,
        limit: 10
      }
    }).then((resAllUsersPageable) => {
      expect(resAllUsersPageable.status).to.eq(200);
      expect(resAllUsersPageable.body).to.be.not.null;
    })
  }

  updateUser(idUser, nome, email, password) {
    cy.request({
      url: `user/${idUser}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: {
        'name': nome,
        'username': email,
        'password': password

      }
    }).then((resUpdateUser) => {
      expect(resUpdateUser.status).to.eq(200);
      expect(resUpdateUser.body).to.be.not.null;
    })
  }

  deleteUser() {
    cy.request({
      url: `user/${id}`,
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then((resDelete) => {
      expect(resDelete.status).to.eq(200);
      expect(resDelete.body).to.be.not.null;
    })
  }

}




