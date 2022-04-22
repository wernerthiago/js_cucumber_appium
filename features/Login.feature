Feature: Login page

    Scenario: App displays the Login page components
        Given the app displays the "Login" page
        Then the app should display the "Sign Up" button
            And the app should display the "Email" field
            And the app should display the "Password" field
            And the app should display the "Sign in" button
            And the app should display the "Single Sign-on" button
            And the app should display the "Google" button
            And the app should display the "Slack" button
            And the app should display the "Microsoft" button
            And the app should display the "Facebook" button
            And the app should display the "SSO" button

    Scenario: App displays Forgot Password link
        Given the app displays the "Login" page
        When the user clicks on the "Email" field
        Then the app should display the "Forgot Password" link

    # The mobile app does not have some important features
    # Scenario: App displays all alert messages
    #     Given the app displays the "Login" page
    #     When the user clicks on the "Sign in" button
    #     Then the app should display the "Email Empty Error" label
    #         And the app should display the "Password Empty Error" label

    # The mobile app does not have some important features
    # Scenario Outline: App does not display error with valid values
    #     Given the app displays the "Login" page
    #     When the user types "<value>" on the "<field>" field
    #         And the user clicks on the "Sign in" button
    #     Then the app should display the "<error_message1>" label
    #         And the app should not display the "<error_message2>" label
    #     Examples: 
    #         | value     | field     | error_message1        | error_message2        |
    #         | a@a.com   | Email     | Password Empty Error  | Email Empty Error     |
    #         | 123456    | Password  | Email Empty Error     | Password Empty Error  |

    Scenario Outline: Login given the user has informed an email with incorrect format
        Given the app displays the "Login" page
        When the user types "<value>" on the "Email" field
            And the user types "123456" on the "Password" field
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