import mongoose from 'mongoose';
const { Schema } = mongoose;
const SportsSchema = new Schema({
  SportName: { type: String },
 SportId:{type:String}
});
module.exports = mongoose.model('SportsDetails',SportsSchema);
