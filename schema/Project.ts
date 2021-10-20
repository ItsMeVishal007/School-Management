import mongoose from 'mongoose';
const { Schema } = mongoose;

interface iProduct {
  ProjectName: string;
  ProjectStartDate: DateConstructor;
  ProjectOwner: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId>;
}

const Product = new Schema<iProduct>({
  ProjectName: { type: String },
  ProjectStartDate: { type: Date },
  ProjectOwner: { type: Schema.Types.ObjectId, ref: 'Client' },
});

export default mongoose.model('Project', Product);
