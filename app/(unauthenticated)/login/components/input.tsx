"use client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = props.type === "password";
  return (
    <div className="relative w-full">
      <input
        {...props}
        type={isPassword ? (isVisible ? "text" : "password") : props.type}
        className="bg-neutral-800/30 outline-0! w-full px-4 py-2 placeholder:text-gray-500 placeholder:text-sm [&:-webkit-autofill]:shadow-[0_0_0_1000px_#1a1a1a_inset]
    [&:-webkit-autofill]:[-webkit-text-fill-color:#fff]"
      />
      {isPassword &&
        (isVisible ? (
          <FaRegEye
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          />
        ) : (
          <FaRegEyeSlash
            onClick={() => setIsVisible(!isVisible)}
            className="absolute size-4.5 right-2.75 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          />
        ))}
    </div>
  );
}
