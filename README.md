# Assignment 2 - Web API.

Name: Pengcheng Zheng

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Extend favorite actors api
 + Extend favorite movies api
 + Backend add movie reviews, movie images, movie actors, actor details, actor images, actor credits, popular and nowplaying
 + Integrate all function above
 + Improve protected routes
 + Implement login, logout and register function

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

.env in movie-api
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/tasky_db
MONGO_DB=YourMongoURL
SECRET=ilikecake
______________________

.env in react-movies
______________________
REACT_APP_TMDB_KEY=YourTMDBKey
FAST_REFRESH=false
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies
- /api/movies/{movieId} | GET | Gets a certain movie
- /api/movies/tmdb/images/{movieId} | GET | Gets images of a movie
- /api/movies/tmdb/upcoming | GET | Gets a list of upcoming movies
- /api/movies/tmdb/genres | GET | Gets a list of genres
- /api/movies/tmdb/genres/{movieId} | GET | Gets a certain genre
- /api/movies/tmdb/popular | GET | Gets a list of popular movies
- /api/movies/tmdb/nowplaying| GET | Gets a list of nowplaying movies
- /api/movies/tmdb/reviews/{movieId} | GET | Get all reviews for movie

- /api/users/ | GET | Get all users
- /api/users?action=register | GET | register a new user
- /api/users?action=register | GET | login
- /api/users/{userId} | GET | Get a certain user

- /api/favorites/{username} | GET | Get all favorite movies of a certain user
- /api/favorites/{username}/{movieId} | Post | Add a favorite movie for a certain user
- /api/favorites/{username}/{movieId} | Delete | Delete a favorite movie for a certain user

- /api/favoriteActors/{username} | GET | Get watchlist movie for user
- /api/favoriteActors/{username}/{actorId} | Post | Add a favorite actor for a certain user
- /api/favoriteActors/{username}/{actorId} | Delete | Delete a favorite actor for a certain user

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

When user login, the api use JWT to generate a token and it will be decode to extract a username. All of them will be store in Session.

Protected route:
+ /movies/favorites | display movies user bookmark
+ /reviews/:id | display movie reviews
+ /movies/:id | display a certain movie details
+ /reviews/form | display a page to write review
+ /movies/mustwatch | display upcoming movies user bookmark
+ /movies/popular | display popular movies
+ /movies/nowplaying | display noeplaying movies
+ /actors/:id | display details of an actor
+ /credits/:id | display credits of an actor
+ /movies/favorite_actors | display actors user bookmark

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

I integrate my React app by creating the movie-api.js to send frontend action to backend and get data back.
Almost views are use my Web API, including get movie list, movie details, popular and nowplaying movie list, login and register and favorite movies and actors.
In Assignment Two, it should not to get a third party certification, so I add register and login functions to fix it.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
