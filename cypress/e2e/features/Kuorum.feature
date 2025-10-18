Feature: Visit and put a fail email

    Background:
        Given A web browser is at the Kuorum page
    Scenario: Success search
        When A user accept cookies on kuorum
        Then the url will contains the subdirectory
        And Click on List
        And I want explore navigation
        And Start a reservation
        Then A user enters the personal data with an incorrect email