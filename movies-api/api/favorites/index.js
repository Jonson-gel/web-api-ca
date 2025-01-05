import express from 'express';
import asyncHandler from 'express-async-handler';
import Favorite from './favoriteModel';

const router = express.Router();

router.get('/:username', asyncHandler(async (req, res) => {
    const { username } = req.params;
    const favorites = await Favorite.find({ username });
    res.status(200).json(favorites);
}));

router.post('/:username', asyncHandler(async (req, res) => {
    try {
        const { username } = req.params; 
        const { movieId } = req.body;

        if (!username || !movieId) {
            return res.status(400).json({ success: false, msg: 'Username and MovieId are required.' });
        }

        const existingFavorite = await Favorite.findOne({ username, movieId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'This movie is already in favorites.' });
        }

        await Favorite.create({ username, movieId });
        res.status(200).json({ success: true, msg: 'Favorite successfully created.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

router.delete('/:username', asyncHandler(async (req, res) => {
    try {
        const { username } = req.params; 
        const { movieId } = req.body;

        if (!username || !movieId) {
            return res.status(400).json({ success: false, msg: 'Username and favoriteId are required.' });
        }

        const deletedFavorite = await Favorite.findOneAndDelete({ username, movieId });
        if (!deletedFavorite) {
            return res.status(404).json({ message: 'Favorite movie can not be found.' });
        }
        res.status(200).json({ success: true, msg: 'Favorite successfully deleted.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

export default router;