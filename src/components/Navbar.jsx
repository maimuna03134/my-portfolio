import React from "react";
import MyContainer from "./container/MyContainer";

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <MyContainer>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            YourName.dev
          </div>
          <ul className="flex gap-6 text-lg font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Projects</li>
            <li className="hover:text-blue-600 cursor-pointer">Skills</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </MyContainer>
    </nav>
  );
};

export default Navbar;
