import { Schema, model } from "mongoose";

const PersonSchema = new Schema(
  {
    name: { type: String, require: true },
  },
  { timestamps: { createdAt: "created", updatedAt: "updated" } }
);

export default model("Person", PersonSchema);
