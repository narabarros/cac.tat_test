# File: features/firstValidation.feature

Feature: Fill in information on the first validation
  As an app user
  I want to fill in my information on the first validation
  So that I can proceed to the next step

  Scenario: Fill in all information correctly
    Given I am on the home page
    When I fill in the "First Name" field with "John"
    And I fill in the "Last Name" field with "Doe"
    And I fill in the "Email" field with "johndoe@gmail.com"
    And I fill in the "Phone" field with "19998098090"
    And I select "blog" in the "Product" field
    And I check the "Email" checkbox
    And I fill in the text area with "help with my blog please, i need more space for write my ideas"
    And I upload the file
    And I take a screenshot and save it as "screenshot.png"
    Then I click on the submit button


  Scenario: Fill some information correctly and another incorrect
    Given I am on the home page
    When I fill in the "First Name" field with "John"
    And I fill in the "Last Name" field with "Doe"
    Then I click on the submit button
