"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

interface PoperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Poper({
  isOpen,
  onClose,
  children,
  title,
}: PoperProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative top-10 h-fit bg-white rounded-[15px] shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col gap-3 justify-around ">

   
        {/* Close Button */}
        <button
          onClick={onClose}
          className="  text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose size={24} />
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-xl text-right  text-gray-800">
            {title}
          </h2>
        )}

        {/* Content */}
        <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
