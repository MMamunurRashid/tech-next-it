import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed z-50 navbar justify-center bg-base-100 shadow-lg max-w-[1440px] mx-auto">
      <div className="">
        <Link to='/' className="btn btn-ghost text-2xl font-bold font-serif">Tech Next IT</Link>
      </div>
    </div>
  );
};

export default Navbar;
