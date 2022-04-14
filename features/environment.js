const wd = require('wd');
const { Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require("../support/customWorld.js")

const PORT = 4723;
setWorldConstructor(CustomWorld);

const config = {
  platformName: 'Android',
  deviceName: '89MX0BQPQ',
  udid: '89MX0BQPQ',
  address: 'https://www.miro.com',
  browserName: 'Chrome',
  automationName: 'UIAutomator2'
};

const driver = wd.promiseChainRemote('0.0.0.0', PORT);
CustomWorld.driver = driver;

Before({timeout: 100000}, async () => {
    await CustomWorld.driver.init(config);
    await CustomWorld.driver.sleep(6000);
});

After(async() => {
    await CustomWorld.driver.quit();
});

module.exports = { 
    CustomWorld
};