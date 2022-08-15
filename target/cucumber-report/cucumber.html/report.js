$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("coinmarketcap.feature");
formatter.feature({
  "line": 3,
  "name": "Verifying if 100 results are present coinmarketcap.com homepage",
  "description": "",
  "id": "verifying-if-100-results-are-present-coinmarketcap.com-homepage",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@coinmarketcap"
    }
  ]
});
formatter.before({
  "duration": 4206661000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User clicks on show rows dropdown button to verify 100 rows",
  "description": "",
  "id": "verifying-if-100-results-are-present-coinmarketcap.com-homepage;user-clicks-on-show-rows-dropdown-button-to-verify-100-rows",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User launches Coin market cap homepage",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# And   User accepts Alerts"
    }
  ],
  "line": 8,
  "name": "User selects hundred from show rows drop down",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User verify that hundred rows are getting displayed on page",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifySteps.userLaunchesCoinMarketCapHomepage()"
});
formatter.result({
  "duration": 98193400,
  "status": "passed"
});
formatter.match({
  "location": "VerifySteps.userSelectsHundredFromShowRowsDropDown()"
});
formatter.result({
  "duration": 20058276600,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d104.0.5112.81)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027CHANDANA\u0027, ip: \u0027192.168.0.38\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a3ec3587f92ab38f16dd7ddee09e4e1d, clickElement {id\u003df89e39d8-2429-4b53-93ba-8ea110b77fd4}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.81, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\chand\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50864}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50864/devtoo..., se:cdpVersion: 104.0.5112.81, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (a3ec3587f92ab38f16dd7ddee09e4e1d)] -\u003e xpath: //div[@display\u003d\u0027flex\u0027]//div[contains(text(),\u0027100\u0027)]//*[name()\u003d\u0027svg\u0027]]\nSession ID: a3ec3587f92ab38f16dd7ddee09e4e1d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.coinmarketcap.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.coinmarketcap.pages.HomePage.selectNumberOfRows(HomePage.java:41)\r\n\tat com.coinmarketcap.steps.VerifySteps.userSelectsHundredFromShowRowsDropDown(VerifySteps.java:30)\r\n\tat ✽.When User selects hundred from show rows drop down(coinmarketcap.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VerifySteps.userVerifyThatHundredRowsAreGettingDisplayedOnPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 922501500,
  "status": "passed"
});
});