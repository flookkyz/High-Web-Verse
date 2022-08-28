import React from "react";

function About() {
  return (
    <div className="bg-[#00081E] py-[200px] px-[100px] text-white">
      <div className="flex justify-between">
        <div className="w-[60%]">
          <span className="text-[82px]">
            PIC
          </span>
        </div>
        <div className="pt-10">
          <span className="text-[58px]">Or You can Make ........ in verse</span>
          <br />
          <button className="border border-white text-white mt-[40px] px-4 py-2 rounded-full flex flex-row items-center">
            Contact now!!
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
