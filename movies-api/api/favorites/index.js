import express from 'express';
import asyncHandler from 'express-async-handler';
import Favorite from './favoriteModel';

const router = express.Router();

router.get('/:userId', asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const favorites = await Favorite.find({ userId });
    res.status(200).json(favorites);
}));

router.post('/:userId', asyncHandler(async (req, res) => {
    try {
        const { userId } = req.params; 
        const { movieId } = req.body;

        if (!userId || !movieId) {
            return res.status(400).json({ success: false, msg: 'UserId and MovieId are required.' });
        }

        const existingFavorite = await Favorite.findOne({ userId, movieId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'This movie is already in favorites.' });
        }

        await Favorite.create({ userId, movieId });
        res.status(200).json({ success: true, msg: 'Favorite successfully created.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

router.delete('/:userId', asyncHandler(async (req, res) => {
    try {
        const { userId } = req.params; 
        const { favoriteId } = req.body;

        if (!userId || !favoriteId) {
            return res.status(400).json({ success: false, msg: 'UserId and favoriteId are required.' });
        }

        const deletedFavorite = await Favorite.findByIdAndDelete(favoriteId);
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