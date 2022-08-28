import React from "react";
import LOGO from "../images/LOGO.svg";

function Navbar() {
  return (
    <>
      <div className="h-20 bg-transparent flex flex-row items-center justify-between px-40 text-white">
        <img
          src={LOGO}
          alt="LOGO"
          className="font-bold text-[26px] flex justify-start"
        />

        <div className="flex flex-row">
          <p href="#" className="mr-7 hover:text-cyan-400 ">
            Home
          </p>
          <p href="#" className="mr-7 hover:text-cyan-400">
            World
          </p>
          <p href="#" className="mr-7 hover:text-cyan-400">
            Roadmap
          </p>
          <p href="#" className="mr-7 hover:text-cyan-400">
            Marketplace
          </p>
          <p href="#" className="hover:text-cyan-400">
            Whitepaper
          </p>
        </div>
        <div className="flex flex-row">
          <button className="bg-gradient-to-r from-[#FC6A19] to-[#E9B531] py-2 px-8 rounded-full mr-[20px] flex flex-row items-center">
            Login
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#signupModal"
            className="h-10 py-2 px-8 border border-white rounded-full hover:text-white hover:font-bold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            Signup
          </button>
        </div>
      </div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-zinc-900/50"
        id="signupModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Sign up
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="flex justify-center py-10">
              <div className="flex flex-col">
                <div>
                  <label htmlFor="">Username</label>
                  <input className="bg-gray-200 rounded " type="text" />
                </div>
                <div>
                  <label htmlFor="">password</label>
                  <input className="bg-gray-200 rounded mt-5" type="text" />
                </div>
                <button className="w-[300px] h-[50px] bg-cyan-300 rounded my-5">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
