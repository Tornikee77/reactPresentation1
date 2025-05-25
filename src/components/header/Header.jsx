import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--color-white)] m-auto mt-[50px] pr-[70px] pl-[70px] rounded-t-[10px] max-w-[1440px] h-[50px]">
      <p className="text-[38px] text-[var(--main-color)]">BurgerSite</p>
      <nav>
        <ul className="flex space-x-[48px] font-inter">
          <li className="font-inter cursor-pointer">Home</li>
          <li className="cursor-pointer">Menu</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
      <div className="flex gap-[30px]">
        <img src="./images/svg/headerLock.svg" alt="" />
        <div className="relative">
          <img
            className="top-1/2 absolute pl-[10px] -translate-y-1/2 transform"
            src="./images/svg/profileHeader.svg"
            alt=""
          />
          <input
            className="bg-[var(--secondary-color)] pl-[40px] border-none rounded-[24px] outline-none w-[162px] h-[35px] text-[10px]"
            type="text"
            placeholder="User123456"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
