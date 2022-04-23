const { World } = require('@cucumber/cucumber');
const device_config = require('./deviceConfig');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this._driver = null;
    this._currentPage = null;
    this._capabilities = null;
    process.env.DEVICE_NAME = options.parameters.deviceNickname;
    this.init(options.parameters.deviceNickname);
  }

  async init(deviceName) {
    const device_capabilities = device_config.find(item => item.name === deviceName).capabilities;
    this.capabilities = device_capabilities;
  }

  get capabilities() {
    return this._capabilities;
  }

  set capabilities(capabilities) {
    this._capabilities = capabilities;
  }

  get driver() {
    return this._driver;
  }

  set driver(driver) {
    this._driver = driver;
  }

  get currentPage() {
    return this._currentPage;
  }

  set currentPage(currentPage) {
    this._currentPage = currentPage;
  }
}

module.exports = CustomWorld