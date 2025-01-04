import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies, getGenres, getMovieReviews, getMovieImages, getPopularMovie, getNowPlayingMovie,
    getMovieActors, getActor, getActorImages, getActorCredits,
    getGenre
} from '../tmdb-api';
  

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/genres/:id', asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const genre = await getGenre(id);
    res.status(200).json(genre);
}));

router.get('/tmdb/reviews/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieGenres = await getMovieReviews(id);
    res.status(200).json(movieGenres);
}));

router.get('/tmdb/movieImages/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) =>{
    const popularMovies = await getPopularMovie();
    res.status(200).json(popularMovies);
}));

router.get('/tmdb/nowPlaying', asyncHandler(async (req, res) =>{
    const popularMovies = await getNowPlayingMovie();
    res.status(200).json(popularMovies);
}));

router.get('/tmdb/actors/:id', asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const movieActors = await getMovieActors(id);
    res.status(200).json(movieActors);
}));

router.get('/tmdb/actor/:id', asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const actor = await getActor(id);
    res.status(200).json(actor);
}));

router.get('/tmdb/actorImages/:id', asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const actorImages = await getActorImages(id);
    res.status(200).json(actorImages);
}));

router.get('/tmdb/actorCredits/:id', asyncHandler(async (req, res) =>{
    const { id } = req.params;
    const actorCredits = await getActorCredits(id);
    res.status(200).json(actorCredits);
}));

export default router;
