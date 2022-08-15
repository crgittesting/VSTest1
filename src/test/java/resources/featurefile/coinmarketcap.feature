
@coinmarketcap
Feature: Verifying if 100 results are present coinmarketcap.com homepage

  Scenario: User clicks on show rows dropdown button to verify 100 rows
    Given User launches Coin market cap homepage
    And   User accepts Alerts
    When  User selects hundred from show rows drop down
    Then  User verify that hundred rows are getting displayed on page