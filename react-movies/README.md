# Assignment 1 - ReactJS app.

Name: Pengcheng Zheng(20109317)

## Overview.

This repository contains a relatively comprehensive movie-finding website where users can freely browse various films. It includes recommendation categories such as popular, upcoming, and nowplaying movies. Users can bookmark their favorite films and actors. To fully access the features, users are required to log in first.

### Features.
 
+ Add upcoming movies to the "Must-Watch" page
+ Bookmark favorite actors
+ View details of actors
+ Discover credits of a actor
+ View actors who play a role of a movie 
+ Add a "NowPlaying" recommendation page
+ Add a "Popular" recommendation page
+ Implement login and logout functionality
+ Enhance page layout and design

## Setup requirements.



## API endpoints.

+ Discover popular movies - movie/popular
+ Discover nowplaying movies - movie/now_playing
+ Discover actors of a movie - movie/:id/credits
+ Discover a certain actor - person/:id
+ Discover images of an actor - person/:id/images
+ Discover credits of an actor - person/:id/movie_credits
+ Get a token - authentication/token/new
+ Create a session - authentication/session/new

## Routing.

All of page below are protected.

+ /movies/mustwatch - display upcoming movies user bookmark
+ /movies/popular - display popular movies
+ /movies/nowplaying - display noeplaying movies
+ /actors/:id - display details of an actor
+ /credits/:id - display credits of an actor
+ /movies/favorite_actors - display actors user bookmark
+ /movies/login - log in and log out

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).