import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    userId: {type: String, required: true},
    movieId: {type: String, required: true},
});

FavoriteSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Favorites', FavoriteSchema);