const { config } = require('./wdio.shared.conf');

//BrowserStact Credentials
config.user = 'tiksangchan_tsHEAJ';
config.key = 'zshRqr3RxyveG8pCyBP3';

//Speces
config.specs =  [
    './test/specs/android/add-note-screen*.js'
];


//capabilities
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "10.0",
        "appium:deviceName": "Google Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://9f5334d4dfcc425e7f06a9ac3a3398221346e896",
        "appium:autoGrantPermissions": true
    }
];
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack'];
exports.config = config;