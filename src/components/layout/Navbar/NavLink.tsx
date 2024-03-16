import React from "react";
import { NavLink } from "@/types/NavLink";
import Link from "next/link";

export default function NavLink({ label, href }: NavLink) {
  return (
    <div className="mx-2">
      <Link href={href}>{label}</Link>
    </div>
  );
}
