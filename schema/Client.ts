import mongoose from 'mongoose';
import { type } from 'os';
import Project from './Project';
const { Schema } = mongoose;
interface iClient {
  ClientName: string;
  ClientEmail: string;
  ClientAddress: string;
  ClientPhoneNumber: string;
  Projects: {
    type: typeof mongoose.Types.ObjectId;
    ref: string;
  }[];
}
const Client = new Schema<iClient>({
  ClientName: { type: String },
  ClientEmail: { type: String },
  ClientAddress: { type: String },
  ClientPhoneNumber: { type: String },
  Projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
});

export default mongoose.model('Client', Client);
