import React, { useState } from "react";
import Image from "../Image";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/icons/user.svg";
import Button from "../Button";
import { RiMenu2Line } from "react-icons/ri";
import { LuCrown } from "react-icons/lu";
import Container from "../Container";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Header() {
  // for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  let toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let closeMenu = () => {
    setMenuOpen(false);
  };
  //   menulist
  const menulist = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Movies",
      link: "/",
    },
    {
      text: "Series",
      link: "/",
    },
    {
      text: "Animation",
      link: "/",
    },
    {
      text: "About",
      link: "/",
    },
  ];
  return (
    <header className=" py-2 sm:py-[25px] fixed z-50 top-0 left-0 w-full">
      <Container>
        <div className="flex items-center justify-between gap-y-4">
          {/* logo */}
          <div className="flex gap-x-[10px] md:gap-x-[20px] 2xl:gap-x-[35px] items-center flex-row-reverse sm:flex-row">
            <Link to={"/"}>
              <Image src={logo} className={`h-auto w-[100px] sm:w-[130px]`} />
            </Link>
            {/* menubar */}
            <div
              className="grid place-content-center cursor-pointer w-7 sm:w-[50px] h-7 sm:h-[50px] rounded-full border border-white/40"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <RxCross2 className="text-sm sm:text-xl cursor-pointer text-[#E2E2E2] z-50" />
              ) : (
                <RiMenu2Line  className="text-[#E2E2E2] text-sm sm:text-xl z-50" />
              )}
            </div>
            <ul
              onClick={closeMenu}
              className={`${
                menuOpen ? "left-0" : "left-[-100%]"
              } flex-col justify-center h-fit w-[275px] duration-300 flex text-center absolute top-0 py-[100px] bg-black/30 z-40`}
            >
              {menulist.map((item, index) => (
                <li
                  key={index}
                  className="text-[#E2E2E2] font-bold text-[16px] font-jost py-3 hover:scale-125 transition-all duration-300"
                >
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* btn & user */}
          <div className="flex gap-x-[18px] items-center">
            {/* btn */}
            <Button
              text="subscribe now"
              icon={<LuCrown size={16} className="text-[#E2E2E2]" />}
              className={`2xl:py-[23px] 2xl:px-[24px]`}
            />
            {/* user icon*/}
            <Image src={user} className={`w-[35px] h-auto sm:w-auto cursor-pointer`} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
