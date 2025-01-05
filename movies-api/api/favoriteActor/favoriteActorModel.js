import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavoriteActorSchema = new Schema({
    username: {type: String, required: true},
    actorId: {type: String, required: true},
});

FavoriteActorSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('FavoriteActors', FavoriteActorSchema);