import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[500px] bg-[#EEF3F7] px-28">
        <div className="justify-between h-[400px] rounded-[30px] border-teal-200 border-2 bg-white">
          <div className="flex w-full h-[300px] items-center p-8 justify-between">
            <div>
              <h1 className="font-bold text-teal-500 text-[24px]">
                LEGACY
                <span className="text-[12px] text-black ">
                  The Story Teller
                </span>
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Quick Links</h1>
              <div className="flex flex-row w-[200px] ">
                <ul className="text-[#666666]">
                  <li className="hover:text-teal-200 cursor-pointer">Home</li>
                  <li className="hover:text-teal-200 cursor-pointer">Services</li>
                  <li className="hover:text-teal-200 cursor-pointer">About</li>
                  <li className="hover:text-teal-200 cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Description</h1>
              <div className="w-[300px]">
                <h3 className="text-[#666666]">
                  THis is some of the description I wat to write for this
                  website and I will sell this to the whole global market,
                  please, buy it and use it in your day to day life
                </h3>
              </div>
            </div>
            <div>
              <button className="bg-teal-500 mr-2 px-3 py-1 rounded-[8px]">
                Button
              </button>
              <button className="bg-teal-500 px-3 py-1 rounded-[8px]">
                Button
              </button>
            </div>
          </div>
          <div className="p-4">
            <hr />
          </div>
          <div className="flex justify-between px-8">
            <h1 className="text-[#999999]">
              Copyright all right reserce | 2023 Designed by{" "}
              <a className="text-black font-semibold">LOGIN</a>
            </h1>
            <h1 className="bg-teal-200 px-2 py-1 rounded">UP</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
