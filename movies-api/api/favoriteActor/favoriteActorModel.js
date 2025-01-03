import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteActorSchema = new Schema({
    userId: {type: String, required: true},
    actorId: {type: String, required: true},
});

FavouriteActorSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Favourites', FavouriteActorSchema);