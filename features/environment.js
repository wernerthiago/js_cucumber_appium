const wd = require('wd');
const { Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require("../support/customWorld.js")

const PORT = 4723;
setWorldConstructor(CustomWorld);

const config = [{
        name: 'personal',
        platformName: 'Android',
        deviceName: '89MX0BQPQ',
        udid: '89MX0BQPQ',
        address: 'https://www.miro.com',
        browserName: 'Chrome',
        automationName: 'UIAutomator2'
    }, {
        name: 'simulator-android',
        platformName: 'Android',
        deviceName: 'Pixel5',
        udid: 'emulator-5554',
        address: 'https://www.miro.com',
        browserName: 'Chrome',
        automationName: 'UIAutomator2'
    }
];

const driver = wd.promiseChainRemote('0.0.0.0', PORT);
CustomWorld.driver = driver;

Before({timeout: 100000}, async () => {
    device_capabilities = await config.find(device => device.name === process.env.DEVICE_NAME);
    delete device_capabilities.name;
    await CustomWorld.driver.init(device_capabilities);
    await CustomWorld.driver.sleep(6000);
});

After(async() => {
    await CustomWorld.driver.quit();
});

module.exports = { 
    CustomWorld
};