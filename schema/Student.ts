import mongoose from 'mongoose';
const { Schema } = mongoose;
const StudentSchema = new Schema({
  Name: { type: String },
  Age: { type: Number },
  Email: { type: String, unique: true },
  ContactNumber: { type: Number, unique: true },
  Address: { type: String },
  ParentDetails: {
    FatherName: { type: String },
    FatherContactNumber: { type: Number, unique: true },
    MotherName: { type: String },
  },
  RollNumber: { type: String,unique:true },
});
module.exports = mongoose.model('StudentDetails', StudentSchema);
