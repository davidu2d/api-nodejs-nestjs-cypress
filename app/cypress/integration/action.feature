Feature: New Space Integrations

Feature: CRUD

    Scenario: Create new user
        Given i want create a new user
        When i inform the datas
        And send request
        Then has user is created success

    Scenario: Login for return jwt token
        Given i inform my user and password
        When i send request
        Then the login is success
        And Jwt token is returned

    Scenario: Find user by id
        Given that I want to find a user by id
        When I pass the user id
        And I submit a request
        Then I will have the user returned successfully

    Scenario: Find user by username
        Given that I want to find a user username
        When I send the request
        Then I will have the user returned success

    Scenario: List all users
        Given that I want to return the list of all users
        When I send this request
        Then I will have a list containing all users returned with success

    # Scenario: List all users pageable
    # Given that I want to list all pageable users
    # When I send a request
    # Then I will have the return of the pageable users list

    Scenario: Update user
        Given that i want to update user
        When I pass the data
        And click on request
        Then will i have the user updated successfully

    Scenario: Delete user
        Given that I want to delete a user
        When submit a delete request
        Then I will have the user deleted