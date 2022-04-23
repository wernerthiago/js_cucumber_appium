class Locator {
    constructor(page, name, type, method_android=null, locator_android=null, method_ios=null, locator_ios=null) {
        this.page = page;
        this.name = name;
        this.type = type;
        this.locator = new Platform(method_android, locator_android, method_ios, locator_ios);
    }
}

class Platform {
    constructor(method_android=null, locator_android=null, method_ios=null, locator_ios=null) {
        this.ios = {
            'method': method_ios,
            'locator': locator_ios
        }
        this.android = {
            'method': method_android,
            'locator': locator_android
        }
    }

    get_locator(platformName) {
        if (platformName === 'iOS') {
            return this.ios;
        } else {
            return this.android;
        }
    }
}

module.exports = Locator;