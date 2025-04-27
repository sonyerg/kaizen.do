import { InferSchemaType, model, Schema } from "mongoose";
import ColumnModel from "./column";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  columns: [
    {
      type: Schema.Types.ObjectId,
      ref: "Column",
    },
  ],
  // owner
  // members
});

// Create default columns for new projects
projectSchema.post("save", async function () {
  if (this.columns?.length === 0) {
    try {
      const defaultColumns = await Promise.all([
        ColumnModel.create({ title: "To Do", projectId: this._id }),
        ColumnModel.create({ title: "In Progress", projectId: this._id }),
        ColumnModel.create({ title: "Done", projectId: this._id }),
      ]);

      this.columns = defaultColumns.map((column) => column._id);
      await this.save();
    } catch (error) {
      console.error("Error creating default columns:", error);
    }
  }
});

type Project = InferSchemaType<typeof projectSchema>;

export default model<Project>("Project", projectSchema);
