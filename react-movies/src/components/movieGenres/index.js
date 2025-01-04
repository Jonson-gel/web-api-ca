import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getGenre } from "../../api/movies-api";
import Chip from "@mui/material/Chip";
import { useQueries } from "react-query";

const MovieGenres = (ids) => {
    const movieGenresQueries = useQueries(
        ids.map((id) => {
            return {
                queryKey: ["genre", { id: id }],
                queryFn: getGenre,
            };
        })
    );

    const isLoading = movieGenresQueries.find((m) => m.isLoading === true);

    if (isLoading) {
        return <Spinner />;
    }

    const genres = movieGenresQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    });

    console.log(genres);

    return genres.name;
};

export default MovieGenres;