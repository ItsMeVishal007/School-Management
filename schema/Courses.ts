import mongoose from 'mongoose';
const { Schema } = mongoose;
const CourseSchema = new Schema({
  CourseName: { type: String },
 CourseId:{type:String}
});
module.exports = mongoose.model('CourseDetails',CourseSchema);
