import { InferSchemaType, model, Schema } from "mongoose";

const columnSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  title: { type: String, required: true },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

type Column = InferSchemaType<typeof columnSchema>;

export default model<Column>("Column", columnSchema);
