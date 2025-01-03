import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({ actor }) => {
    const navigate = useNavigate();

    return (
        <>
            <Typography variant="h6" component="p">
                {actor.biography}
            </Typography>

            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Other_name" sx={{ ...chip }} color="primary" />
                </li>
                {actor.also_known_as.map((n, id) => (
                    <li key={id}>
                        <Chip label={n} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>

            <Fab
                color="secondary"
                variant="extended"
                onClick={() => navigate(`/credits/${actor.id}`)}
                sx={{
                    position: 'fixed',
                    bottom: '1em',
                    right: '1em'
                }}
            >
                <NavigationIcon />
                Credits
            </Fab>
        </>
    );
};
export default ActorDetails;