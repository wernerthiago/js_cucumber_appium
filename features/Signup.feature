Feature: Sign Up page

    Scenario: App displays the Sign up page components
        Given the app displays the "Sign Up" page
        Then the app should display the "Title" label
            And the app should display the "Name" field
            And the app should display the "Body" label
            And the app should display the "Email" field
            And the app should display the "Password" field
            And the app should display the "Get Started" button
            And the app should display the "Single Sign-on" section
            And the app should display the "Free License" section
            And the app should display the "Newsletter" checkbox
            And the app should display the "Legal" checkbox

    @test
    Scenario: App displays all alert messages
        Given the app displays the "Sign Up" page
        When the user clicks on the "Get Started" button
        Then the app should display the "Name Empty Error" label
            And the app should display the "Email Empty Error" label
            And the app should display the "Password Empty Error" label
            And the app should display the "Legal Empty Error" label