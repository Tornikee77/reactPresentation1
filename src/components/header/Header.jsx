import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[var(--main-color)] m-auto pr-[70px] pl-[70px] max-w-[1440px] h-[50px]">
      <p className="text-[38px]">BurgerSite</p>
      <nav>
        <ul className="flex space-x-[48px]">
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex">
        <img src="./images/svg/headerLock.svg" alt="" />
        <div className="relative">
          <img
            className="top-1/2 absolute pl-[10px] -translate-y-1/2 transform"
            src="./images/svg/profileHeader.svg"
            alt=""
          />
          <input
            className="bg-[var(--secondary-color)] pl-[40px] rounded-[24px] w-[162px] h-[35px] text-[10px]"
            type="text"
            placeholder="User123456"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
