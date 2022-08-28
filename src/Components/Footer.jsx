import React from "react";
import LOGO from "../images/LOGO.svg";
import Pic_Line from "../images/Follow/line.svg";
import Pic_Facebook from "../images/Follow/facebook.svg";
import Pic_Discord from "../images/Follow/discord.svg";
import Pic_Telegram from "../images/Follow/telegram.svg";

function Footer() {
  return (
    <>
      <div className="flex flex-row justify-between bg-[#000000] py-[120px] px-[220px]">
        <div>
          <img src={LOGO} alt="" />
          <span className="text-[#64748B] text-[12px]">
            ©2022, HIGH VR CONNECT
          </span>
        </div>
        <div className="flex flex-col text-white">
          <span>Follow</span>
          <span>xxxxxxxxx</span>
        </div>
        <div className="flex flex-col text-white ">
          <span>Address</span>
          <div className="flex flex-row mt-[15px]">
            <img src={Pic_Facebook} alt="" className="mr-[20px]"/>
            <img src={Pic_Telegram} alt="" className="mr-[20px]"/>
            <img src={Pic_Line} alt="" className="mr-[20px]"/>
            <img src={Pic_Discord} alt="" className="mr-[20px]"/>
          </div>
        </div>
        <div className="flex flex-col text-white">
          <span>Contact</span>
          <span>xxxxxxxxx</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
