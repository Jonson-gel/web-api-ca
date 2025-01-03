import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../spinner";
import { getActorImages, getActor } from "../../api/tmdb-api";

const TemplateActorPage = ({ id }) => {
  const { data: imageData, isLoading: isImageLoading, isError: isImageError } = useQuery(
    ["images", { id }],
    getActorImages
  );

  const { data: actorData, isLoading: isActorLoading, isError: isActorError } = useQuery(
    ["actor", { id }],
    getActor
  );

  const navigate = useNavigate();

  if (isImageLoading || isActorLoading) {
    return <Spinner />;
  }

  if (isImageError || isActorError) {
    return <h1>Failed to load data</h1>;
  }

  const images = imageData.profiles.slice(0, 1);
  const actorName = actorData.name;

  const handleImageClick = () => {
    navigate(`/actor/${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} style={{ padding: "15px" }}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {images.map((image) => (
          <div key={image.file_path}>
            {/* Image container */}
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "2 / 3",
                overflow: "hidden",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                margin: "0 auto",
                cursor: "pointer",
              }}
              onClick={handleImageClick}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                alt={actorName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            {/* Actor name */}
            <Typography
              variant="h6"
              sx={{
                marginTop: "10px",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              {actorName}
            </Typography>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default TemplateActorPage;