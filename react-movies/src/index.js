import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpComingPage from "./pages/upComingMoviesPage";
import MustWatchPage from "./pages/mustWatchPage";
import PopularPage from "./pages/moviePopularPage";
import Nowplaying from "./pages/movieNowPlayingPage";
import ActorPage from "./pages/actorDetailsPage";
import ActorCreditsPage from "./pages/actorCreditsPage"
import { AuthProvider } from "./contexts/authContext";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./pages/loginPage"
import FavoriteActorsPage from "./pages/favoriteActorsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/movies/login" element={<LoginPage />} />
              <Route path="/movies/favorites" element={<ProtectedRoute><FavoriteMoviesPage /></ProtectedRoute>} />
              <Route path="/reviews/:id" element={<ProtectedRoute><MovieReviewPage /></ProtectedRoute>} />
              <Route path="/movies/:id" element={<ProtectedRoute><MoviePage /></ProtectedRoute>} />
              <Route path="/reviews/form" element={<ProtectedRoute><AddMovieReviewPage /></ProtectedRoute>} />
              <Route path="/movies/upcoming" element={<ProtectedRoute><UpComingPage /></ProtectedRoute>} />
              <Route path="/movies/mustwatch" element={<ProtectedRoute><MustWatchPage /></ProtectedRoute>} />
              <Route path="/movies/popular" element={<ProtectedRoute><PopularPage /></ProtectedRoute>} />
              <Route path="/movies/nowplaying" element={<ProtectedRoute><Nowplaying /></ProtectedRoute>} />
              <Route path="/actors/:id" element={<ProtectedRoute><ActorPage /></ProtectedRoute>} />
              <Route path="/credits/:id" element={<ProtectedRoute><ActorCreditsPage /></ProtectedRoute>} />
              <Route path="/movies/favorite_actors" element={<ProtectedRoute><FavoriteActorsPage /></ProtectedRoute>} />
            </Routes>
          </AuthProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);