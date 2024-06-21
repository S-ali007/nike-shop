import { Cart, Heart, Line, NikeLogo, SearchIcon } from "@/icons/logos";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className=" bg-[#F5F5F5] h-[36px] w-full flex items-center">
        <div className=" max-w-[1343px] w-full mx-auto flex justify-between items-center ">
          <Image src="/images/header-person.png" width={24} height={24} />
          <ul className=" flex gap-[15px] items-center">
            <li className=" text-[11px] font-[500] leading-[14px] ">
              Find store
            </li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Help</li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Join Us</li>
            <li>
              <Line />
            </li>
            <li className=" text-[11px] font-[500] leading-[14px] ">Sign In</li>
          </ul>
        </div>
      </div>

      <div className=" max-w-[1343px] w-full mx-auto h-[60px] flex justify-between items-center relative">
        <NikeLogo />
        <ul className=" flex gap-6 max-w-[760px] w-full absolute inset-0 mx-auto justify-center items-center">
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">New & Featured</li>
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">Men</li>
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">Women</li>
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">Kids</li>
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">Sale</li>
          <li className=" text-[16px] text-[#111111] font-[600] leading-[24px]">SNKRS</li>
        </ul>
        <div className=" flex items-center gap-[18px]">
          <div className="flex bg-[#f5f5f5] w-[180px] h-[40px] rounded-[100px] items-center pl-[10px] ">
            <SearchIcon />
            <input
              type="text"
              className=" w-[84px] outline-none bg-[#f5f5f5] ml-[14px]"
              placeholder="Search"
            />
          </div>
          <Heart />
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;
