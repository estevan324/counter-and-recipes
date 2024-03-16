import React from "react";

interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  backgroundColor: string;
  hover?: string;
}

export default function CounterButton({
  children,
  onClick,
  backgroundColor,
  hover,
}: CounterButtonProps) {
  return (
    <button
      className={`${backgroundColor} hover:${hover} p-4 rounded-full mx-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
