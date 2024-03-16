import { NAV_LINKS } from "@/configs/constants";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div className="bg-violet-900 text-white p-5 flex shadow-lg">
      {NAV_LINKS.map(({ href, label }) => (
        <NavLink label={label} href={href} />
      ))}
    </div>
  );
}
