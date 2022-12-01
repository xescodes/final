import mongoose from "mongoose";
const Schema = mongoose.Schema

const citaSchema = new Schema(
    {
      title: {type:String},       
      content: {type:String}
    },
    {collection: 'citas'}
)

export default mongoose.model('CitaModel', citaSchema)