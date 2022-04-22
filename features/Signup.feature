Feature: Sign Up page

    Scenario: App displays the Sign up page components
        Given the app displays the "Sign Up" page
        Then the app should display the "Title" label
            And the app should display the "Back" button
            And the app should display the "Name" field
            And the app should display the "Email" field
            And the app should display the "Password" field
            And the app should display the "Newsletter" checkbox
            And the app should display the "Legal" checkbox
            And the app should display the "Sign Up" button

    # The mobile app does not have some important features
    # Scenario: App displays all alert messages
    #     Given the app displays the "Sign Up" page
    #     When the user clicks on the "Get Started" button
    #     Then the app should display the "Name Empty Error" label
    #         And the app should display the "Email Empty Error" label
    #         And the app should display the "Password Empty Error" label
    #         And the app should display the "Legal Empty Error" label

    # The mobile app does not have some important features
    # Scenario Outline: App does not display error with valid values
    #     Given the app displays the "Sign Up" page
    #     When the user types "<value>" on the "<field>" field
    #         And the user clicks on the "Get Started" button
    #     Then the app should display the "<error_message1>" label
    #         And the app should display the "<error_message2>" label
    #         And the app should not display the "<error_message3>" label
    #     Examples: 
    #         | value     | field     | error_message1    | error_message2        | error_message3        |
    #         | John Doe  | Name      | Email Empty Error | Password Empty Error  | Name Empty Error      |
    #         | a@a.com   | Email     | Name Empty Error  | Password Empty Error  | Email Empty Error     |
    #         | 123456    | Password  | Name Empty Error  | Email Empty Error     | Password Empty Error  |

    Scenario Outline: Sign up given the user has informed an email with incorrect format
        Given the app displays the "Sign Up" page
        When the user types "<value>" on the "Email" field
            And the user types "12345678" on the "Password" field
            And the user clicks on the "Sign Up" button
        Then the app should display the "Email Invalid Error" label
        Examples:
            | value |
            | a.a@a |
            | a.a   |

    Scenario Outline: Password field has minimum character length
        Given the app displays the "Sign Up" page
        When the user types "<value>" on the "Password" field
            And the user types "a@a.com" on the "Email" field
            And the user clicks on the "Sign Up" button
        Then the app should display the "Password Minimum Characters" label
        Examples:
            | value     |
            | 1234567   |
            | 123456    |
            | 1         |