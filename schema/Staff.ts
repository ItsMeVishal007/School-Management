import mongoose from 'mongoose';
const { Schema } = mongoose;
interface Staff {
  Name: string;
  Email: string;
  Age: number;
  ContactNumber: number;
  Address: string;

  StaffId: string;
  Role: string;
}
const StaffSchema = new Schema<Staff>({
  Name: { type: String },
  Age: { type: Number },
  Email: { type: String, unique: true },
  ContactNumber: { type: Number, unique: true },
  Address: { type: String },
  StaffId: { type: String, unique: true },
  Role: {
    RoleName: {
      type: String,
    },
    RoleId: {
      type: String,
    },
  },
});
module.exports = mongoose.model('StaffDetails', StaffSchema);
