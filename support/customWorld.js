const { World } = require('@cucumber/cucumber')
class CustomWorld extends World {
  driver = null;
  currentPage = null;
  _capabilities = null;
  
  get capabilities() {
    return this._capabilities;
  }

  set capabilities(value) {
    this._capabilities = value;
  }

  constructor(options) {
    super(options);
    // Custom actions go here.
    process.env.DEVICE_NAME = options.parameters.deviceNickname;
    this.init(options.parameters.deviceNickname);
  }

  async init(deviceName) {
    const device_capabilities = config.find(device => device.name === deviceName);
    delete await device_capabilities.name;
    this.defaultCapabilities = device_capabilities;
    this.capabilities = device_capabilities;
  }
}

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

module.exports = CustomWorld