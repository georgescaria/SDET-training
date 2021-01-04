Feature: Google search
  I want to use this template for my feature file

  Background: Open browser and navigateto google
    Given User navigates to google

  @smoke
  Scenario Outline: Write string in Google Search testbox
    Given User navigates to Google Page
    And Enter search string as "<value>"
    Then Results are displayed

    Examples: 
      | value     |
      | IBM       |
      | Cucumuber |
      | SDET      |
