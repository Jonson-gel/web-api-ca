import express from 'express';
import asyncHandler from 'express-async-handler';
import FavoriteActor from './favoriteActorModel';

const router = express.Router();

router.get('/:username', asyncHandler(async (req, res) => {
    const { username } = req.params;
    const favoriteActors = await FavoriteActor.find({ username });
    res.status(200).json(favoriteActors);
}));

router.post('/:username', asyncHandler(async (req, res) => {
    try {
        const { username } = req.params; 
        const { movieId } = req.body;

        if (!username || !movieId) {
            return res.status(400).json({ success: false, msg: 'Username and MovieId are required.' });
        }

        const existingFavoriteActor = await FavoriteActor.findOne({ username, movieId });
        if (existingFavoriteActor) {
            return res.status(400).json({ message: 'This movie is already in favorite actors.' });
        }

        await FavoriteActor.create({ username, movieId });
        res.status(200).json({ success: true, msg: 'Favorite actor successfully created.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

router.delete('/:username', asyncHandler(async (req, res) => {
    try {
        const { username } = req.params; 
        const { favoriteActorId } = req.body;

        if (!username || !favoriteActorId) {
            return res.status(400).json({ success: false, msg: 'Username and favoriteActorId are required.' });
        }

        const deletedFavoriteActor = await Favorite.findByIdAndDelete(favoriteActorId);
        if (!deletedFavoriteActor) {
            return res.status(404).json({ message: 'Favorite actor movie can not be found.' });
        }
        res.status(200).json({ success: true, msg: 'Favorite actor successfully deleted.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

export default router;