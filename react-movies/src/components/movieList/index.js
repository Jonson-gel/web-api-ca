import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card"

const MovieList = ({ movies, action }) => {
  return (
    <Grid container spacing={3} sx={{ padding: "20px" }}>
      {movies.map((movie) => (
        <Grid
          key={movie.id}
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Movie movie={movie} action={action} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;

