import React, { useState } from "react";
import logo from "/logo.svg";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full">
      <nav className="pt-10 px-4 max-w-[1240px] mx-auto">
        <ul className="items-center mx-auto text-white justify-between max-w-[793px] hidden md:flex">
          <Link smooth to="#about">
            <ListItem text="About me" />
          </Link>
          <Link smooth to="#stack">
            <ListItem text="Technical Skills" />
          </Link>

          <Link smooth to="#projects">
            <ListItem text="Projects" />
          </Link>
          <Link smooth to="#contacts">
            <ListItem text="Contacts" />
          </Link>
        </ul>

        <div
          onClick={handleNav}
          className="absolute top-10 right-2.5 z-10 p-1 block md:hidden"
        >
          {!nav ? (
            <HiX color="white" size={30} />
          ) : (
            <HiMenuAlt3 color="white" size={30} />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed right-0 top-0 w-[60%] h-full border-l border-l-[#AB71C6] ease-in-out duration-300 bg-[#0F103F]"
              : "fixed right-[-100%] ease-in-out duration-300"
          }
        >
          <ul className="text-white flex flex-col items-center justify-center pt-20">
            <Link smooth to="#about" onClick={handleNav}>
              <ListItem text="About me" />
            </Link>
            <Link smooth to="#stack" onClick={handleNav}>
              <ListItem text="Technical Skills" />
            </Link>
            <Link smooth to="#projects" onClick={handleNav}>
              <ListItem text="Projects" />
            </Link>
            <Link smooth to="#contacts" onClick={handleNav}>
              <ListItem text="Contacts" />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const ListItem = ({ text }) => {
  return (
    <li className="p-2.5 hover:text-[#AB71C6] hover:cursor-pointer duration-500">
      {text}
    </li>
  );
};

export default Navbar;
export { ListItem };
