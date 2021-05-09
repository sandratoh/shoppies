# The Shoppies Awards

The Shoppies Awards is a challenge project completed for the Fall 2021 Shopify UX & Web Development Internship. It is a single-page responsive web application that allows users to search for movies and nominate them to Shopify's new movie award show: The Shoppies.

View live application here: [The Shoppies Awards](https://shoppies-awards-nominations.herokuapp.com/)

## Project Stack

**Front-End**: TypeScript, React, HTML, SASS, Axios, Material UI  
**Back-End**: Node.js  
**API**: [OMDb - The Open Movie Database](http://www.omdbapi.com)

## Final Product

## Project Features

### Technical Requirements

- Search results should come from OMDB's API.
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

### Additional Features

- Responsive web design for desktop, tablet, and mobile view.
- Nomination card badge showing number of nominees currently in users' list.
- Disable all nomination buttons with prompt to submit or remove nominees when user has 5 films.
- Auto-search functionality with debounced input to optimize event handler and app performance.
- Result card call-to-actions clear result list and/or auto-focus to search bar input field for new search.
- User confirmation dialog when submitting or clearing nomination list.
- Disable submit button if nomination list has not changed from previous submission.

## Dependencies

- Axios
- Classnames
- Material UI
- Node-sass
- React
- React-dom
- React-scripts
- Typescript
- Web-vitals

## Getting Started

_Note: This project requires an OMDb API key. Please visit http://www.omdbapi.com/apikey.aspx for more information._

1. Fork this repository, and clone your fork of the repository.

2. Install dependencies with command: `npm install`

3. Create a `.env` file using `.env.example` as a reference: `cp .env.example .env`

4. Insert OMDb API key into `.env` file

5. Once all dependencies are installed, run `npm start` to start the server

6. In your browser, go to `localhost:3000`

7. Nominate away!
