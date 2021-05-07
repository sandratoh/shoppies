# The Shoppies MVP

## Features

- [x] **Search bar** to enter movie title

- [x] **Result list** containing search result:

  - [x] result string
  - [x] title
  - [x] year of release
  - [x] `Nominate` CTA
    - [x] active - add to nomination list
    - [x] disabled - if result already nominated
    - [x] disabled - if nomination list is full (stretch)

- [ ] **Nomination list**:
  - [x] display list of films already nominated
  - [x] maximum 5 nominees
  - [ ] when max. nominees reached:
    - [x] banner display
    - [ ] user notification/alert (stretch)
    - [x] disable all `Nominate` CTA (stretch) and/or alert message when clicked
  - [ ] `Remove` CTA
    - [x] remove nominee from nomination list
    - [ ] alert/confirmation before removing (stretch)
  - [ ] `Clear` CTA (stretch)
    - [x] clear all nominees from nomination list
    - [ ] alert/confirmation before clearing
  - [ ] sliding/fixed card with scroll (stretch)

## Technical Requirements

1. Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
2. Each search result should list at least its title, year of release and a button to nominate that film.
3. Updates to the search terms should update the result list
4. Movies in search results can be added and removed from the nomination list.
5. If a search result has already been nominated, disable its nominate button.
6. Display a banner when the user has 5 nominations.
