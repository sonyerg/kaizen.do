import { InferSchemaType, model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
    // reporter: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

type Task = InferSchemaType<typeof taskSchema>;

export default model<Task>("Task", taskSchema);
