// Logo.jsx
import React from "react";
import myLogo from "../assets/my_logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Image */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={myLogo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        maimuna.
      </span>
    </div>
  );
};

export default Logo;
