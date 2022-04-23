const SignUpPage = require('../pages/signup.js').SignUpPage;
const LoginPage = require('../pages/login.js').LoginPage;
const HomePage = require('../pages/home.js').HomePage;

const page_factory = {
    'Sign Up': new SignUpPage(),
    'Login': new LoginPage(),
    'Home': new HomePage()
};

function get_page_class(key) {
    if (key in page_factory) {
        return page_factory[key];
    } else {
        throw new Error(`The page with name ${key} is not implemented on pages/ folder or implemented on page_factory file.`);
    }
}

module.exports = { 
    get_page_class
}