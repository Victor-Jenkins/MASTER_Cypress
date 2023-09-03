Feature: Visit and search flat on page https://clikalia.es/vender and search flat on Madrid

    Background:
        Given A web browser is at the Clikalia page
    Scenario: Success search
        When A user accept cookies
        Then the url will contains the subdirectory
        And Click on Buy Flat
        And I want buy on Madrid
        And Start a reservation
        Then A user enters the name and surnames