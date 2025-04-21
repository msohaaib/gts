import React from "react";

const OButton = ({ children }) => {
  return (
    <button className="w-[7.5em] h-[2.3em] m-2 bg-[#F58634] text-white rounded-[0.625em] text-[20px] font-bold cursor-pointer relative z-1 overflow-hidden hover:text-black group">
      <div className="bg-white absolute -left-[20%] rounded-[6rem] -right-[20%] top-0 bottom-0 skew-x-[-45deg] scale-0 group-hover:skew-x-[-45deg] group-hover:scale-100 transition-all duration-1000"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default OButton;
