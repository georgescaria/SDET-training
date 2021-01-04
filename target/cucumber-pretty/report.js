$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/sdet1.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "I want to use this template for my feature file",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Write string in Google Search testbox",
  "description": "",
  "id": "google-search;write-string-in-google-search-testbox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter search string as \"\u003cvalue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Results are displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "google-search;write-string-in-google-search-testbox;",
  "rows": [
    {
      "cells": [
        "value"
      ],
      "line": 14,
      "id": "google-search;write-string-in-google-search-testbox;;1"
    },
    {
      "cells": [
        "IBM"
      ],
      "line": 15,
      "id": "google-search;write-string-in-google-search-testbox;;2"
    },
    {
      "cells": [
        "Cucumuber"
      ],
      "line": 16,
      "id": "google-search;write-string-in-google-search-testbox;;3"
    },
    {
      "cells": [
        "SDET"
      ],
      "line": 17,
      "id": "google-search;write-string-in-google-search-testbox;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5173215000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open browser and navigateto google",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to google",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_google()"
});
formatter.result({
  "duration": 272917300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Write string in Google Search testbox",
  "description": "",
  "id": "google-search;write-string-in-google-search-testbox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter search string as \"IBM\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Google_Page()"
});
formatter.result({
  "duration": 8628471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IBM",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enter_search_string_as(String)"
});
formatter.result({
  "duration": 188382100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.results_are_displayed()"
});
formatter.result({
  "duration": 114884300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8J7T5EC\u0027, ip: \u0027172.27.144.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\GEORGE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53117}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f33080dd3688a74a60a772fe811b6d67\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefinition.StepDefinition.results_are_displayed(StepDefinition.java:41)\r\n\tat ✽.Then Results are displayed(src/test/java/Features/sdet1.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 769286800,
  "status": "passed"
});
formatter.before({
  "duration": 3937104000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open browser and navigateto google",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to google",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_google()"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Write string in Google Search testbox",
  "description": "",
  "id": "google-search;write-string-in-google-search-testbox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter search string as \"Cucumuber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Google_Page()"
});
formatter.result({
  "duration": 12166893800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumuber",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enter_search_string_as(String)"
});
formatter.result({
  "duration": 422510500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.results_are_displayed()"
});
formatter.result({
  "duration": 106761400,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8J7T5EC\u0027, ip: \u0027172.27.144.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\GEORGE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53154}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e92cddfabdd128d830313066839336f6\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefinition.StepDefinition.results_are_displayed(StepDefinition.java:41)\r\n\tat ✽.Then Results are displayed(src/test/java/Features/sdet1.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1231567000,
  "status": "passed"
});
formatter.before({
  "duration": 3894648800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open browser and navigateto google",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to google",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_google()"
});
formatter.result({
  "duration": 63500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Write string in Google Search testbox",
  "description": "",
  "id": "google-search;write-string-in-google-search-testbox;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User navigates to Google Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Enter search string as \"SDET\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Google_Page()"
});
formatter.result({
  "duration": 10034039600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SDET",
      "offset": 24
    }
  ],
  "location": "StepDefinition.enter_search_string_as(String)"
});
formatter.result({
  "duration": 139542600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.results_are_displayed()"
});
formatter.result({
  "duration": 71472100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8J7T5EC\u0027, ip: \u0027172.27.144.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\GEORGE~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53190}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4cf13f23b50b3a4fa550f8be2ab17b31\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat StepDefinition.StepDefinition.results_are_displayed(StepDefinition.java:41)\r\n\tat ✽.Then Results are displayed(src/test/java/Features/sdet1.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 881051200,
  "status": "passed"
});
});