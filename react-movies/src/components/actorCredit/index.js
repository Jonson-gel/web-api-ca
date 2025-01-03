import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getActorCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import { Link } from "react-router-dom";

const ActorCredits = ({ actor }) => {
    const { data, error, isLoading, isError } = useQuery(
        ["actorCredits", { id: actor.id }],
        getActorCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return (
            <Typography variant="h6" color="error" align="center">
                {`Error: ${error.message}`}
            </Typography>
        );
    }

    const credits = data.cast || [];
    const defaultPoster = "https://via.placeholder.com/175x250?text=No+Image";

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" component="h3" fontWeight="bold" gutterBottom>
                Credits
            </Typography>
            <Paper
                sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#f9f9f9",
                }}
            >
                <Grid container spacing={2} justifyContent="center"
                    sx={{
                        maxHeight: "90vh",
                        overflowY: "auto",
                        padding: "20px",
                    }}
                >
                    {credits.map((credit) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={credit.id}>
                            <Link to={`/movies/${credit.id}`} style={{ textDecoration: "none" }}>
                                <img
                                    src={
                                        credit.poster_path
                                            ? `https://image.tmdb.org/t/p/w500/${credit.poster_path}`
                                            : defaultPoster
                                    }
                                    alt={credit.original_title || "No title"}
                                    style={{
                                        width: "100%",
                                        maxWidth: "175px",
                                        borderRadius: "8px",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ marginTop: 1 }}
                                >
                                    {credit.original_title || "Unknown Title"}
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default ActorCredits;
