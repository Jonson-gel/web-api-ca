import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavoriteActorsIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromFavoriteActors = (e) => {
    e.preventDefault();
    context.removeFromFavoriteActors(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorite actors"
      onClick={handleRemoveFromFavoriteActors}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoriteActorsIcon;