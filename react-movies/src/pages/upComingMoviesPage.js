import React from "react";
import { getUpComing } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlayListAddIcon from "../components/cardIcons/playListAdd";

const UpComingPage = (props) => {

  const { data, error, isLoading, isError } = useQuery('upcoming', getUpComing)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('upcoming', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlayListAddIcon movie={movie} />
      }}
    />
  );
};
export default UpComingPage;