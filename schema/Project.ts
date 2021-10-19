import mongoose from 'mongoose';
const { Schema } = mongoose;

interface iProduct {
  ProjectName: string;
  ProjectOwner: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
  ProjectStartDate: DateConstructor;
}

const Product = new Schema<iProduct>({
  ProjectName: { type: String },
  ProjectOwner: { type: mongoose.Types.ObjectId, ref: 'Client' },
  ProjectStartDate: { type: Date },
});

export default mongoose.model('Product', Product);
