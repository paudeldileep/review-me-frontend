import React from "react";

const BasicLoader = (props) => {
  return (
    <div className="w-full h-full rounded-md bg-purple-200 bg-opacity-80 flex flex-col justify-center items-center text-purple-800 font-mono font-bold text-xl absolute left-0 top-0 z-10 overflow-hidden">
      {props.children}
    </div>
  );
};

export default BasicLoader;
