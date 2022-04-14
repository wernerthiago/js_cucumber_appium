const signup = require('../pages/signup.js');
const login = require('../pages/login.js');
const home = require('../pages/home.js');

const page_factory = {
    'Sign Up': signup.SignUpPage,
    'Login': login.LoginPage,
    'Home': home.HomePage
};

module.exports = { 
    page_factory
}