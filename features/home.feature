@home
Feature: Home Page

  Background:
    Given I Disable protractor synchronization
    When I should be on "Home" page
    And Element "HomePage > Header > ContactButton" should be clickable
    Then I click "HomePage > Header > ContactButton" element


  @smoke
  @ticket_07
  Scenario: Verify that error message is displayed on Contact Page if all required fields are nor entered

    When I should be on "Contact" page
    Then I enter "test" text into "ContactPage > fnInput" element
    Then I enter "test" text into "ContactPage > lnInput" element
    Then I scroll to the "ContactPage > SubmitButton" element
    Then I click "ContactPage > SubmitButton" element
    And Text of "ContactPage > ErrorMessage" element should be equal to "Please make corrections below and try again." ignoring case


  @smoke
  @ticket_07
  Scenario Outline: Verify labels

    Then  Element "ContactPage > <Label>" should be visible
    And Text of "ContactPage > <Label>" element should be equal to "<Label text>" ignoring case

    Examples:
      | Label      | Label text   |
      | fnLabel    | First Name:* |
      | lnLabel    | Last Name:*  |
      | emailLabel | Email:*      |
      | phoneLabel | Phone:       |
      | jobLabel   | Job Title:*  |


  @smoke
  @debug
  Scenario Outline: Verify labels

    Then  Element "ContactPage > <Label>" should be visible
    Then Text "ContactPage > <Label>" equal "<Label text>"


    Examples:
      | Label      | Label text   |
      | fnLabel    | FIRST NAME:* |
      | lnLabel    | LAST NAME:*  |
      | emailLabel | EMAIL:*      |
      | phoneLabel | PHONE:       |
      | jobLabel   | JOB TITLE:*  |