import React from "react";
import NavLink from "@/interfaces/NavLink";
import Link from "next/link";

export default function NavLink({ label, href }: NavLink) {
  return (
    <div className="mx-2">
      <Link href={href}>{label}</Link>
    </div>
  );
}
