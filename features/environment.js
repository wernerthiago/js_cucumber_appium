const wd = require('wd');
const { BeforeAll, Before, After, setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require("../support/customWorld.js")
const device_config = require('../support/deviceConfig.js')

const PORT = 4723;
setWorldConstructor(CustomWorld);
const driver = wd.promiseChainRemote('0.0.0.0', PORT);

const config = [{
    name: 'personal',
    platformName: 'Android',
    deviceName: '89MX0BQPQ',
    udid: '89MX0BQPQ',
    app: '/Users/thiagowerner/js_cucumber_appium/resources/android.apk',
    platformVersion: '11',
    automationName: 'UIAutomator2'
}, {
    name: 'simulator-android',
    platformName: 'Android',
    deviceName: 'Pixel5',
    udid: 'emulator-5554',
    app: '/Users/thiagowerner/js_cucumber_appium/resources/android.apk',
    platformVersion: '10',
    automationName: 'UIAutomator2'
}
];

Before({timeout: 100000}, async () => {
    const device_capabilities = device_config.find(item => item.name === process.env.DEVICE_NAME).capabilities;
    CustomWorld.capabilities = device_capabilities;
    CustomWorld.driver = await driver;
    await CustomWorld.driver.init(device_capabilities);
    await CustomWorld.driver.sleep(12000);
});

After(async() => {
    await CustomWorld.driver.quit();
});

const createDriver = async () => {
    const driver = await wd.promiseChainRemote('0.0.0.0', PORT);
    CustomWorld.driver = driver;
}

module.exports = { 
    CustomWorld
};