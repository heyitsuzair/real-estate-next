import React from "react";
import LoadingBar from "react-top-loading-bar";
const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <LoadingBar
      waitingTime={300}
      shadow={true}
      color={"rgb(244 67 54 / 1)"}
      progress={progress}
      height={3}
    />
  );
};

export default ProgressBar;
