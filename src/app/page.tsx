import Counter from "@/components/counter";
import React from "react";

export default function Home() {
  return (
    <div>
      <Counter className="mt-4 mx-auto" initialCount={1} />
    </div>
  );
}
