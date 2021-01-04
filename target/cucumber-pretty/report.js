$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/sdet2.feature");
formatter.feature({
  "line": 1,
  "name": "Ola form fill",
  "description": "I want to use this template for my feature file",
  "id": "ola-form-fill",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Fill out contact form",
  "description": "",
  "id": "ola-form-fill;fill-out-contact-form",
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
  "name": "Click on Contact Us",
  "keyword": "And "
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
  "id": "ola-form-fill;fill-out-contact-form;",
  "rows": [
    {
      "cells": [
        "value"
      ],
      "line": 14,
      "id": "ola-form-fill;fill-out-contact-form;;1"
    },
    {
      "cells": [
        "George"
      ],
      "line": 15,
      "id": "ola-form-fill;fill-out-contact-form;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4675370600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open browser and navigate to Ola",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User navigates to Ola",
  "keyword": "Given "
});
formatter.match({
  "location": "OlaContactFormSteps.user_navigates_to_Ola()"
});
formatter.result({
  "duration": 3333038600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Fill out contact form",
  "description": "",
  "id": "ola-form-fill;fill-out-contact-form;;2",
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
  "name": "Click on Contact Us",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter search string as \"George\"",
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
  "location": "OlaContactFormSteps.click_on_Contact_Us()"
});
formatter.result({
  "duration": 6176524500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 24
    }
  ],
  "location": "OlaContactFormSteps.enter_search_string_as(String)"
});
formatter.result({
  "duration": 2268912300,
  "status": "passed"
});
formatter.match({
  "location": "OlaContactFormSteps.results_are_displayed()"
});
formatter.result({
  "duration": 2081585900,
  "status": "passed"
});
formatter.after({
  "duration": 762757500,
  "status": "passed"
});
});