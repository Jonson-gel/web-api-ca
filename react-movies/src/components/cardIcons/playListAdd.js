import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlayListAddIcon from "@mui/icons-material/PlaylistAdd";


const AddPlayListIcon = ({ movie }) => {
    const context = useContext(MoviesContext);
  
    const handleAddPlayList = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
    };
  
    return (
      <IconButton aria-label="play list add" onClick={handleAddPlayList}>
        <PlayListAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default AddPlayListIcon;