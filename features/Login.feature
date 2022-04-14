Feature: Login page

    Scenario: App displays the Login page components
        Given the app displays the "Login" page
        Then the app should display the "Title" label
            And the app should display the "Single Sign-on" section
            And the app should display the "Separator" label
            And the app should display the "Email" field
            And the app should display the "Password" field
            And the app should display the "Forgot Password" link
            And the app should display the "Sign in" button
            And the app should display the "Single Sign-on" link

    Scenario: App displays all alert messages
        Given the app displays the "Login" page
        When the user clicks on the "Sign in" button
        Then the app should display the "Email Empty Error" label
            And the app should display the "Password Empty Error" label

    Scenario Outline: App does not display error with valid values
        Given the app displays the "Login" page
        When the user types "<value>" on the "<field>" field
            And the user clicks on the "Sign in" button
        Then the app should display the "<error_message1>" label
            And the app should not display the "<error_message2>" label
        Examples: 
            | value     | field     | error_message1        | error_message2        |
            | a@a.com   | Email     | Password Empty Error  | Email Empty Error     |
            | 123456    | Password  | Email Empty Error     | Password Empty Error  |

    Scenario Outline: Login given the user has informed an email with incorrect format
        Given the app displays the "Login" page
        When the user types "<value>" on the "Email" field
            And the user clicks on the "Sign in" button
        Then the app should display the "Login Invalid" label
        Examples:
            | value |
            | a.a@a |
            | a.a   |

    Scenario: Login successfully
        Given the app displays the "Login" page
        When the user types valid credentials
            And the user clicks on the "Sign in" button
        Then the app should display the "Home" page