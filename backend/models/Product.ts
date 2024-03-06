import mongoose, { Schema } from "mongoose";

const ColorsSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  hex: { type: String, required: true },
});

const InformationSchema = new Schema({
  width: { type: String, required: true },
  height: { type: String, required: true },
  depth: { type: String, required: true },
  weight: { type: String, required: true },
  capacity: { type: String, required: true },
  price: { type: Number, required: true },
});

const ProductSchema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    colors: { type: [ColorsSchema], required: true },
    information: { type: InformationSchema, required: true },
  },
  {
    collection: "Products",
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
