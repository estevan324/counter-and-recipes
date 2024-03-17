import React from "react";

interface HeaderProps {
  message: string;
  className?: string;
}

export default function Header({ message, className }: HeaderProps) {
  return (
    <div className={`bg-indigo-400 p-7 w-1/2 rounded-lg ${className}`}>
      <h1 className="text-center text-white font-bold text-xl">{message}</h1>
    </div>
  );
}
