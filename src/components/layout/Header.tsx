import React from "react";

interface HeaderProps {
  message: string;
}

export default function Header({ message }: HeaderProps) {
  return (
    <div className="bg-indigo-500 p-7">
      <h1 className="text-center text-white font-bold text-xl">{message}</h1>
    </div>
  );
}
