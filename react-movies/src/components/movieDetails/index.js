import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
import { getMovieActors } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { Link } from "react-router-dom";
import MovieGenres from "../movieGenres";
import { getGenre } from "../../api/movies-api";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { data, error, isLoading, isError } = useQuery(
        ["movieActors", { id: movie.id }],
        getMovieActors
    )

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    const actors = data.cast || [];

    

    return (
        <>
            <Typography variant="h4" component="h3" fontWeight="bold">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Genres" sx={{ ...chip }} color="primary" />
                </li>
                <li>
                    <Chip label={movie.adult?"Limited":"Unlimited"} sx={{ ...chip }} />
                </li>
                {/* {movie.genre_ids.map((genre_id) => (
                    
                    <li>
                        <Chip label={genre.name} sx={{ ...chip }} />
                    </li>
                ))} */}
                {/* <MovieGenres ids={movie.genre_ids} /> */}
            </Paper>

            <Paper component="ul" sx={{ ...root }}>
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                <Chip label={`Released: ${movie.release_date}`} />
            </Paper>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Spoken languages" sx={{ ...chip }} color="primary" />
                </li>
                {movie.spoken_languages.map((language) => (
                    <li key={language.name}>
                        <Chip label={language.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Production Country" sx={{ ...chip }} color="primary" />
                </li>
                {movie.production_countries.map((country) => (
                    <li key={country.name}>
                        <Chip label={country.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>

            <Paper
                component="ul"
                sx={{ ...root }}>
                <li>
                    <Chip label="Actors" sx={{ ...chip }} color="primary" />
                </li>
                {actors.map((actors) => (
                    <li key={actors.id}>
                    <Link to={`/actors/${actors.id}`}>
                      <Chip label={actors.name} sx={{...chip}}/>
                    </Link> 
                  </li>
                ))}
            </Paper>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={{
                    position: 'fixed',
                    bottom: '1em',
                    right: '1em'
                }}
            >
                <NavigationIcon />
                Reviews
            </Fab>
            <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <MovieReviews movie={movie} />
            </Drawer>

        </>
    );
};
export default MovieDetails;