import { NAV_LINKS } from "@/configs/constants";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NAV_LINKS.map(({ href, label }) => (
              <NavLink href={href} key={label} label={label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
