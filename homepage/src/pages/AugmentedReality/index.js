import React from "react";
import { Routes, Route } from "react-router-dom";
import AugmentedRealityController from "./sharedComponents/AugmentedRealityController";

const AugmentedRealityPage = () => {
  return (
    <Routes>
      <Route path="/*" element={<AugmentedRealityController />} />
    </Routes>
  );
};

export default AugmentedRealityPage;
