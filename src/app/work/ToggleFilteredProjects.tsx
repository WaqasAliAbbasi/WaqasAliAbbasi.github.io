"use client";

import { Toggle } from "@/components/Toggle";
import React, { useState } from "react";

export const ToggleFilteredProjects: React.FC<{
  HighlightProjects: React.ReactNode;
  AllProjects: React.ReactNode;
}> = ({ HighlightProjects, AllProjects }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="flex flex-row gap-x-2 justify-end items-center">
        <h6 className="text-sm">See All</h6>
        <Toggle enabled={showAll} setEnabled={setShowAll} />
      </div>
      {showAll ? AllProjects : HighlightProjects}
    </>
  );
};
