import React from "react";

function Sideshow() {
  return (
    <div className=" flex flex-row w-screen h-screen bg-[#070721] text-white pt-[80px] items-center">
      <div className="w-[50%]">PIC</div>
      <div className="flex flex-col w-[50%]">
        <span>Head Content</span>
        <span>tittle content</span>
        <button className="w-[20%] h-10 py-2 px-8 border border-white rounded-full hover:text-white hover:font-bold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50">
          Learn
        </button>
      </div>
    </div>
  );
}

export default Sideshow;
