import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateFavoriteActorPage";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";
import { Grid } from "@mui/material";
import Header from "../components/headerMovieList";
import Paper from "@mui/material/Paper";
import FilterCard from "../components/filterMoviesCard";

const FavoriteActorsPage = () => {
  const { favoriteActors: actorIds } = useContext(MoviesContext);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const favoriteActorsQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["movie", { id: actorId }],
        queryFn: getActor,
      };
    })
  );

  const isLoading = favoriteActorsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favoriteActorsQueries.map((q) => {
    q.data.genre_ids = q.data.also_known_as.map((g) => g.id);
    return q.data;
  });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {/* Header */}
      <Grid item xs={12}>
        <Header title="Favorite Actors" />
      </Grid>

      <Grid container spacing={3}>
        {/* 左侧搜索框 */}
        <Grid item xs={12} sm={4} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
            />
          </Paper>
        </Grid>

        {/* 右侧演员列表 */}
        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={3}>
            {actorIds.map((id) => (
              <PageTemplate key={id} id={id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FavoriteActorsPage;