# Ionic ServiceNow SSO
A tutorial App that walks you through to integrate Service-Now SSO with Ionic using OAuth2.
## Environment Setup
Before you start running this app, make sure your environment is ready. Because this app will only work in Device not on the browser due to CORS issue.
Please follow the below link to setup your environment to build this app in android devices.
- [https://github.com/pinkpotato/ionic-environment-setup](https://github.com/pinkpotato/ionic-environment-setup)

## Plugins used
- ionic cordova plugin add cordova-plugin-inappbrowser --save
- npm install @ionic-native/in-app-browser --save
- ionic cordova plugin add cordova-plugin-advanced-http --save
- npm install @ionic-native/http --save
- ionic cordova plugin add cordova-plugin-native-spinner
- npm install @ionic-native/spinner-dialog --save
## OAuth Flow
 - https://dev70643.service-now.com/oauth_auth.do?response_type=token&redirect_uri=http://localhost:8100/oauth/callback&client_id=3d9a9f21e9310010b76416f30cb285ce&state="login"
