import { userModel } from "../../schemas/user.schema.js";

export const getSettings = async (userId) => {
  try {
    const user = await userModel.findById(userId);
    return user.customSettings;
  } catch (error) {
    throw new Error("Error fetching settings");
  }
};

export const updateSettings = async (userId, newSettings) => {
  try {
    const { virtualReality, dashboard, portfolio } = newSettings;
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        $set: {
          "customSettings.virtualReality": virtualReality,
          "customSettings.dashboard": dashboard,
          "customSettings.portfolio": portfolio,
        },
      },
      { new: true }
    );
    return user.customSettings;
  } catch (error) {
    throw new Error("Error updating settings");
  }
};

export const updateSpecificSettings = async (
  userId,
  settingsType,
  newSettings
) => {
  try {
    const updateQuery = {};
    updateQuery[`customSettings.${settingsType}`] = newSettings;

    const user = await userModel.findByIdAndUpdate(
      userId,
      { $set: updateQuery },
      { new: true }
    );
    return user.customSettings[settingsType];
  } catch (error) {
    throw new Error(`Error updating ${settingsType} settings`);
  }
};
