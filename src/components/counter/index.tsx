"use client";

import React from "react";
import CounterButton from "./CounterButton";
import { FaPlus, FaMinus } from "react-icons/fa";

interface CounterProps {
  className?: string;
  initialCount?: number;
}

export default function Counter({ className, initialCount = 0 }: CounterProps) {
  return (
    <div
      className={`${className} shadow-lg w-96 p-6 bg-violet-100 divide-y divide-violet-950`}
    >
      <p className="text-4xl text-center py-3 my-2 bg-violet-300 rounded-lg">
        {initialCount}
      </p>
      <div className="my-4 flex justify-center">
        <div className="mt-5">
          <CounterButton
            backgroundColor="bg-red-700"
            hover="bg-red-800"
            onClick={() => {}}
          >
            <FaMinus color="#fff" />
          </CounterButton>
          <CounterButton
            backgroundColor="bg-blue-700"
            hover="bg-blue-900"
            onClick={() => {}}
          >
            <FaPlus color="#fff" />
          </CounterButton>
        </div>
      </div>
    </div>
  );
}
