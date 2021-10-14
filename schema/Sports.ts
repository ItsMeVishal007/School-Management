import mongoose from 'mongoose';
const { Schema } = mongoose;
interface Sport {
  SportName: string;
  SportId: string;
}
const SportsSchema = new Schema<Sport>({
  SportName: { type: String },
  SportId: { type: String },
});
module.exports = mongoose.model('SportsDetails', SportsSchema);
