import React from "react";
import { getNowPlayingMovies } from "../api/movies-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const NowPlayingPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('nowplaying', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('nowplaying', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Nowplaying Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default NowPlayingPage;