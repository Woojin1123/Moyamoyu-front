import React from "react";

export default function CommonButton({ children }) {
  return (
    <button
      className="
        inline-flex
        items-center
        justify-center
        !font-semibold
        text-blue-600
        rounded-md
        border-none
        outline-none
        cursor-pointer
        h-9
        px-4
        text-base
        !bg-white
        hover:bg-blue-500
        active:bg-blue-700
        transition-colors
        duration-150
      "
    >
      {children}
    </button>
  );
}
