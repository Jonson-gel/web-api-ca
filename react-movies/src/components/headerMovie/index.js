import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const MovieHeader = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Paper
      component="div"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        marginBottom: "24px",
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton
        aria-label="go back"
        onClick={() => navigate(-1)}
        sx={{
          backgroundColor: "#e3f2fd",
          "&:hover": { backgroundColor: "#bbdefb" },
          padding: "12px",
        }}
      >
        <ArrowBackIcon color="primary" fontSize="medium" />
      </IconButton>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          textAlign: "center",
          flex: 1,
          margin: { xs: "16px 0", sm: "0 16px" },
        }}
      >
        <span style={{ fontWeight: "bold" }}>{movie.title}</span>
        <a
          href={movie.homepage}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "8px",
            color: "inherit",
            textDecoration: "none",
            verticalAlign: "middle",
          }}
        >
          <HomeIcon color="primary" fontSize="medium" />
        </a>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            marginTop: "8px",
            fontSize: "1.25rem",
            fontStyle: "italic",
            color: "#757575",
          }}
        >
          {`"${movie.tagline}"`}
        </Typography>
      </Typography>

      <IconButton
        aria-label="go forward"
        onClick={() => navigate(+1)}
        sx={{
          backgroundColor: "#e3f2fd",
          "&:hover": { backgroundColor: "#bbdefb" },
          padding: "12px",
        }}
      >
        <ArrowForwardIcon color="primary" fontSize="medium" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
