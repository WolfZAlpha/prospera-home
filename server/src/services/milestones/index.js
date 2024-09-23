import { milestoneModel } from "../../schemas/milestone.schema.js";

export const getMilestones = async () => {
  try {
    return await milestoneModel.find().sort({ date: 1 });
  } catch (error) {
    console.error("Error fetching milestones:", error);
    throw error;
  }
};

export const createMilestone = async (milestoneData) => {
  try {
    const newMilestone = new milestoneModel(milestoneData);
    return await newMilestone.save();
  } catch (error) {
    console.error("Error creating milestone:", error);
    throw error;
  }
};

export const updateMilestone = async (id, updateData) => {
  try {
    return await milestoneModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  } catch (error) {
    console.error("Error updating milestone:", error);
    throw error;
  }
};

export const deleteMilestone = async (id) => {
  try {
    await milestoneModel.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting milestone:", error);
    throw error;
  }
};
