import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoriteActorsIcon = ({ actor }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoriteActors = (e) => {
    e.preventDefault();
    context.addToFavoriteActors(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavoriteActors}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoriteActorsIcon;