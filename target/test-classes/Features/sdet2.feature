Feature: Ola form fill
  I want to use this template for my feature file

  Background: Open browser and navigate to Ola
    Given User navigates to Ola

  @smoke
  Scenario Outline: Fill out contact form
    And Click on Contact Us
    And Enter search string as "<value>"
    Then Results are displayed

    Examples: 
      | value  |
      | George |
