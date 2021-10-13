import mongoose from 'mongoose';
const { Schema } = mongoose;
interface Course {
  CourseName: string;
  CourseId: string;
}
const CourseSchema = new Schema<Course>({
  CourseName: { type: String },
  CourseId: { type: String },
});

module.exports = mongoose.model('CourseDetails', CourseSchema);
