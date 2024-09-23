import { projectModel } from "../../schemas/project.schema.js";

export const getProjectOverview = async () => {
  try {
    const project = await projectModel.findOne().sort({ createdAt: -1 });
    return project;
  } catch (error) {
    console.error("Error fetching project overview:", error);
    throw error;
  }
};

export const updateProjectStatus = async (status) => {
  try {
    const project = await projectModel.findOneAndUpdate(
      {},
      { $set: { status } },
      { new: true, sort: { createdAt: -1 } }
    );
    return project;
  } catch (error) {
    console.error("Error updating project status:", error);
    throw error;
  }
};
