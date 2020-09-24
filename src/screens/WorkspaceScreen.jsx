import React from "react";
import ContextMenu from "features/Workspace/ContextMenu";
import Workspace from "features/Workspace";

const WorkspaceScreen = () => {
  return (
    <>
      <Workspace />
      <ContextMenu />
    </>
  );
};

export default WorkspaceScreen;
