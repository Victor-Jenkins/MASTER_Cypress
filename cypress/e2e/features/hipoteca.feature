Feature: Contract Mortgage Clikalia

  Scenario: Select Mortgage, price, years and interest, fill in personal data
    
    Given I am on the Clikalia website
    When As user clicks on Hipoteca
    Then I select calcula tu hipoteca
    Then I proceed to get information
    
