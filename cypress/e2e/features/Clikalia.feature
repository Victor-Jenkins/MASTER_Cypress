Feature: Visit and search flat on page https://clikalia.es/vender and search flat on Madrid

    Background:
        Given A web browser is at the Clikalia page
    Scenario: Success search
        When A user rejects cookies
        Then User navigates to Buy Flat
        Then DEBUG - this step is loaded
        Then User selects Madrid as location
        Then User starts a reservation
        Then User enters name and surname
