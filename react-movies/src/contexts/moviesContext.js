import React, { useState, useEffect } from "react";
import { addToFavorite, deleteFromFavorite, deleteFromFavoriteActors,
  getFavorite, getFavoriteActors, addToFavoriteActor } from "../api/movies-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const username = sessionStorage.getItem("username");
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustwatch, setMustwatch] = useState( [] )
  const [favoriteActors, setFavoriteActors] = useState( [] )

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
    addToFavorite({ username, movieId: movie.id });
  };

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      if (!username) return;
      try {
        const data = await getFavorite({ username });
        const movieIds = data.map((movie) => movie.movieId);
        setFavorites(movieIds);
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };
    fetchFavoriteMovies();
  }, [favorites, username]);

  
  const addToFavoriteActors = (actor) => {
    let newFavoriteActors = [];
    if (!favoriteActors.includes(actor.id)){
      newFavoriteActors = [...favoriteActors, actor.id];
    }
    else{
      newFavoriteActors = [...favoriteActors];
    }
    setFavoriteActors(newFavoriteActors)
    addToFavoriteActor({ username, actorId: actor.id });
  };

  const removeFromFavoriteActors = (actor) => {
    setFavoriteActors( favoriteActors.filter(
      (mId) => mId !== actor.id
    ) )
    deleteFromFavoriteActors({username, actorId: actor.id});
  };

  useEffect(() => {
    const fetchFavoriteActors = async () => {
      if (!username) return;
      try {
        const data = await getFavoriteActors({ username });
        const actorIds = data.map((actor) => actor.actorId);
        setFavorites(actorIds);
      } catch (error) {
        console.error("Error fetching favorite actors:", error);
      }
    };
    fetchFavoriteActors();
  }, [favoriteActors, username]);

  const addToMustWatch = (movie) => {
    let newMustWatch = [];
    if (!mustwatch.includes(movie.id)){
      newMustWatch = [...mustwatch, movie.id];
    }
    else{
      newMustWatch = [...mustwatch];
    }
    setMustwatch(newMustWatch)
  };
  
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
    deleteFromFavorite({username, movieId: movie.id})
  };

  const removeFromMustWatch = (movie) => {
    setMustwatch( mustwatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustwatch,
        myReviews,
        favoriteActors,
        addToFavorites,
        addToMustWatch,
        removeFromFavorites,
        removeFromMustWatch,
        addReview,
        addToFavoriteActors,
        removeFromFavoriteActors,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;