import React from "react";

let Header = () => {
  return (
    <>
      <div className="flex justify-between items-center m-6 py-4 px-6 sm:m-20 bg-black text-white rounded-md">
        <h1 className="pFont text-xl font-bold sm:text-2xl ">
          StepItUp<span className="text-yellow-500">.</span>
        </h1>
        <a
          href="https://linktr.ee/vbyte"
          target="_blank"
          className="bg-black border-3 border-amber-400 rounded-full px-4 py-1  pFont text-sm sm:text-lg hover:bg-yellow-500 hover:text-black hover:bg-yellow-600 hover:motion-preset-pop motion-duration-300"
        >
          <h1>Connect</h1>
        </a>
      </div>
    </>
  );
};

export default Header;
