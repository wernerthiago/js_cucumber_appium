const deviceConfig = [
    {
        name: 'personal',
        capabilities: {
            platformName: 'Android',
            deviceName: '89MX0BQPQ',
            udid: '89MX0BQPQ',
            app: '/Users/thiagowerner/js_cucumber_appium/resources/android.apk',
            platformVersion: '11',
            automationName: 'UIAutomator2'
        }
    },
    {
        name: 'simulatorAndroid',
        capabilities: {
            platformName: 'Android',
            deviceName: 'emulator-5554',
            udid: 'emulator-5554',
            app: '/Users/thiagowerner/js_cucumber_appium/resources/android.apk',
            platformVersion: '10',
            automationName: 'UIAutomator2'
        }
    }
];

module.exports = deviceConfig;