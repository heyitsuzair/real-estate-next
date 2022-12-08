import React from "react";

const BadgeFilled = ({ text }: { text: string }) => {
  return (
    <span className="rounded-full bg-red-500 px-8 hover:bg-slate-800 transition-all cursor-pointer py-1.5 text-white">
      {text}
    </span>
  );
};

export default BadgeFilled;
