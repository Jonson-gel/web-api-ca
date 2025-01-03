import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
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
    setFavorites(newFavorites)
  };

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
  };

  const removeFromMustWatch = (movie) => {
    setMustwatch( mustwatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToFavoriteActors = (actor) => {
    let newFavoriteActors = [];
    if (!favoriteActors.includes(actor.id)){
      newFavoriteActors = [...favoriteActors, actor.id];
    }
    else{
      newFavoriteActors = [...favoriteActors];
    }
    setFavoriteActors(newFavoriteActors)
    console.log(favoriteActors);
  };

  const removeFromFavoriteActors = (actor) => {
    setFavoriteActors( favoriteActors.filter(
      (mId) => mId !== actor.id
    ) )
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