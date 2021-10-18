import mongoose from 'mongoose';
const { Schema } = mongoose;
interface iClient {
  ClientName: string;
  ClientEmail: string;
  ClientAddress: string;
  ClientPhoneNumber: string;
}
const Client = new Schema<iClient>({
  ClientName: { type: String },
  ClientEmail: { type: String },
  ClientAddress: { type: String },
  ClientPhoneNumber: { type: String },
});

export default mongoose.model('Client', Client);
