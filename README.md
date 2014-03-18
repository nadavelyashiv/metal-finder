Metal Finder App
================

based on Yeoman Ionic AngularJS PhoneGap Seed (https://github.com/MNCC/yeoman-ionic-angular-phonegap-seed)


## How to use it

clone this repo and:
- `cd metal-finder`
- `npm install`
- `bower install`
- `mkdir platforms`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git`
- `cordova platform add android`
- `grunt build`

If a device is connected:
`cordova run android`

If an emulator is running:
`cordova emulate android`

When developing for android, to see current available devices to deploy on:
`adb devices`
