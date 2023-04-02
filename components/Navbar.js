import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [toggleLoginBtn, settoggleLoginBtn] = useState(false);
  return (
    <>
      <div className="bg-[#EEF3F7] w-full border-b-orange-900">
        <div className="flex justify-between items-center content-center mx-28 py-5">
          <h1 className="font-bold text-teal-500 text-[24px]">
            LEGACY
            <span className="text-[12px] text-black ">The Story Teller</span>
          </h1>
          <div className="relative">
            <input
              placeholder="Search anything..."
              className="w-[400px] h-[50px] rounded-[30px] border-solid border-[1px] border-teal-200 px-[20px] focus:outline-none"
            />
            <div className="absolute inset-y-0 right-5 flex text-[20px] text-[#999999] items-center cursor-pointer hover:text-teal-200">
              <BsSearch />
            </div>
          </div>
          <div>
            <ul className="flex font-semibold text-[#595959] ">
              <li className="pr-[50px] text-teal-500 cursor-pointer">
                <a href="/">Home</a>
              </li>
              <Link href="/shop">
                <li className="pr-[50px] hover:text-teal-500 cursor-pointer">
                  <span>Shop</span>
                </li>
              </Link>
              <Link href="/about">
                <li className="pr-[50px] hover:text-teal-500 cursor-pointer">
                  <span>About</span>
                </li>
              </Link>
              <button
                className="bg-teal-200 texr-black bg-teal-200 mr-2 px-3 py-1 rounded-[8px] cursor-pointer"
                onClick={() => settoggleLoginBtn(!toggleLoginBtn)}
              >
                LOGIN
              </button>
              <button
                className="bg-teal-200 texr-black bg-teal-200 mr-2 px-3 py-1 rounded-[8px] cursor-pointer"
                onClick={() => settoggleLoginBtn(!toggleLoginBtn)}
              >
                SIGNUP
              </button>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      {toggleLoginBtn && (
        <div className="h-[350px] w-[300px] block shadow-2xl rounded-[20px] bg-teal-200 flex right-28 z-10 justify-center items-center absolute">
          <div className="flex flex-col">
            <h2 className="flex text-[14px] text-[#333333] justify-center mb-6 font-bold">
              Security Detected! Please login.{" "}
            </h2>
            <input
              type="email"
              placeholder="email"
              className="h-[40px] p-5 rounded-full mb-2"
            />
            <input
              type="password"
              placeholder="password"
              className="h-[40px] p-5 rounded-full mb-2"
            />
            <Link href={"/login"}>
              <button className="w-full cursor-pointer h-[40px] border-2 border-[#666666] text-[#666666] font-semibold hover:bg-white rounded-full mb-2">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
