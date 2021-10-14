import { model, Schema } from 'mongoose';
interface Student {
  Name: string;
  Email: string;
  Age: number;
  ContactNumber: number;
  Address: string;
  ParentDetails: {
    FatherName: string;
    MotherName: string;
    FatherContactNumber: string;
  };
  RollNumber: string;
}
const StudentSchema = new Schema<Student>({
  Name: { type: String },
  Age: { type: Number },
  Email: { type: String, unique: true },
  ContactNumber: { type: Number, unique: true },
  Address: { type: String },
  ParentDetails: {
    FatherName: { type: String },
    FatherContactNumber: { type: String, unique: true },
    MotherName: { type: String },
  },
  RollNumber: { type: String, unique: true },
});
export default model('StudentDetails', StudentSchema);
