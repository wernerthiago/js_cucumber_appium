# Structure

JavaScript + Cucumber + Page Objects + Appium

# Installation

To install all dependecies:

```$ npm install```

# Configure your device

In the [environment.js](features/environment.js) file, inside config variable, you can configure your device. Use one of existent examples to help you.

# Configure your environment variables

To test the authentication happy flow, we're using environment variables.

So, make sure to set the following variables in your terminal before running the tests:

```$ export MIRO_USERNAME="your@username.com"```

```$ export MIRO_PASSWORD="12345678"```

# Execution

Run Appium server:

```$ appium```

In case of your device's chromedriver does not match to the system, use the following command:

```$ appium --chromedriver-executable /path/to/the/chromedriver```

Run all test files:

```$ node_modules/.bin/cucumber-js --world-parameters '{"deviceNickname":"personal"}'```

Run specific feature file:

```$ node_modules/.bin/cucumber-js features/Login.feature --world-parameters '{"deviceNickname":"personal"}'```

Run specific tag from a test case:

```$ node_modules/.bin/cucumber-js -t @tag --world-parameters '{"deviceNickname":"personal"}'```

As you can see, the devices are handled by --world-parameters flag. So, after configuring your device inside environment.js file, you can use the new device nickname.

The deviceNickname parameter will match the info from name attribute inside config variable.

# Creating a new Feature file

## Write the scenarios

Create a new feature file inside [feature](features/) folder and make sure to follow all Gherkin rules and Cucumber best practices.

## Create a new Page Object class

Create a new Page Object class inside [pages](pages/) folder. Copy/paste the code of one of the existent examples to help you.

Inside elements variable, you can configure the elements of the page scope. The combination of name and type will diferentiate one element to other.

Element:

````
const elements = [
    {
        'name': 'Title',
        'type': 'LABEL',
        'method': 'xpath',
        'locator': '//*[@class="signup"]'
    }
];
````

The name attribute got the reference from Gherkin scenario. So, if we have something similar:

```
Then the app should display "Title" label
```

The type attribute is responsible to organize the elements inside the code.

The method attribute is the way of the test automation will use to locate this element in the DOM.

The locator attribute is the actual locator of the element inside the DOM.

All Page Object classes should have the element, navigate and trait methods. They are essential to the test automation.

* navigate(): is the way that the test automation will use to access the page;
* trait(): is the special element of the page that will be responsible for saying that this page is this page.

```
    static get elements() {
        return elements;
    }

    static async element(name, type) {
        return elements.find(element => element.name === name && element.type === type);
    }

    static async navigate() {
        ...
        this.trait();
    }

    static async trait() {
        ...
    }
```

Finally, don't forget to setup the [page_factory.js](support/page_factory.js). Add the new Page Object class inside the page_factory variable.