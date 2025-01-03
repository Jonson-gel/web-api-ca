import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch";
import { MoviesContext } from "../contexts/moviesContext";

const MustWatchPage = () => {
const {mustwatch: movieIds } = useContext(MoviesContext);

const mustwatchMovieQueries = useQueries(
  movieIds.map((movieId) => {
    return {
      queryKey: ["movie", { id: movieId }],
      queryFn: getMovie,
    };
  })
);

const isLoading = mustwatchMovieQueries.find((m) => m.isLoading === true);

if (isLoading) {
  return <Spinner />;
}

const movies = mustwatchMovieQueries.map((q) => {
  q.data.genre_ids = q.data.genres.map(g => g.id)
  return q.data
});

return (
  <PageTemplate
    title="Must-Watch Movies"
    movies={movies}
    action={(movie) => {
      return (
        <>
          <RemoveFromMustWatchIcon movie={movie} />
        </>
      );
    }}
  />
);
};

export default MustWatchPage;