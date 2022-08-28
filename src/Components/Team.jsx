import React from "react";
import Pic_team from "../images/team.svg";

function Team() {
  return (
    <div className="bg-gradient-to-b from-[#18107D] via-[#091749] to-[#00081E] py-[80px] px-[100px]">
      <div className="flex justify-center text-white">
        <center className="flex flex-col">
          <span className="text-[48px] text-[#4AE3EA] font-bold">Core Team</span>
        </center>
      </div>
      <div className="flex justify-between mt-[100px] text-white text-center">
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
      </div>
      <div className="flex justify-between mt-[100px] text-white text-center">
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
        <div>
          <img src={Pic_team} alt="" />
          <span className="mt-[15px]">Name Person</span>
          <br />
          <span>Position Person</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
