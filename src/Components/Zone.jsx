import React from "react";

function Zone() {
  return (
    <>
      <div className="text-center">
        <span className="text-[58px] text-[#4AE3EA]">Zone</span>
      </div>
      <div className="flex flex-col">
        <center>
          <div className="w-[80%] h-[500px] flex flex-row text-white mb-[70px]">
            <div className="w-[50%] bg-[#070721] rounded-l-xl">
              <span>CONTENT</span>
            </div>
            <div className="w-[50%] bg-black rounded-r-xl">
              <span>PIC</span>
            </div>
          </div>
          <div className="w-[80%] h-[500px] flex flex-row text-white mb-[70px]">
            <div className="w-[50%] bg-black rounded-l-xl">
              <span>PIC</span>
            </div>
            <div className="w-[50%] bg-[#070721] rounded-r-xl">
              <span>CONTENT</span>
            </div>
          </div>
          <div className="w-[80%] h-[500px] flex flex-row text-white mb-[70px]">
            <div className="w-[50%] bg-[#070721] rounded-l-xl">
              <span>CONTENT</span>
            </div>
            <div className="w-[50%] bg-black rounded-r-xl">
              <span>PIC</span>
            </div>
          </div>
          <div className="w-[80%] h-[500px] flex flex-row text-white mb-[70px]">
            <div className="w-[50%] bg-black rounded-l-xl">
              <span>PIC</span>
            </div>
            <div className="w-[50%] bg-[#070721] rounded-r-xl">
              <span>CONTENT</span>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Zone;
