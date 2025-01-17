export const getMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getGenre = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `http://localhost:8080/api/movies/tmdb/genres/${id}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getUpcomingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/upcoming`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getPopularMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/popular`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getNowPlayingMovies = () => {
  return fetch(
    `http://localhost:8080/api/movies/tmdb/nowPlaying`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const signup = async ({ username, password }) => {
  return fetch(
    `http://localhost:8080/api/users?action=register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const login = async ({ username, password }) => {
  return fetch(
    `http://localhost:8080/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .then((data) => {
      localStorage.setItem("authToken", data.token);
      return data;
    })
    .catch((error) => {
      throw error
    });
};

export const addToFavorite = async ({ username, movieId }) => {
  return fetch(
    `http://localhost:8080/api/favorites/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const deleteFromFavorite = async ({ username, movieId }) => {
  return fetch(
    `http://localhost:8080/api/favorites/${username}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ movieId }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getFavorite = async ({ username }) => {
  return fetch(
    `http://localhost:8080/api/favorites/${username}`, {}, true
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const addToFavoriteActor = async ({ username, actorId }) => {
  console.log(username);
  console.log(actorId);
  return fetch(
    `http://localhost:8080/api/favoriteActors/${username}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ actorId }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const deleteFromFavoriteActors = async ({ username, actorId }) => {
  return fetch(
    `http://localhost:8080/api/favoriteActors/${username}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ actorId }),
  }).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getFavoriteActors = async ({ username }) => {
  return fetch(
    `http://localhost:8080/api/favoriteActors/${username}`, {}, true
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};