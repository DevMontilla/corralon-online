import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { SearchBox } from "./SearchBox";

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full bg-yellow-400">
      {/* Logo */}
      <div>
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Corralón
          </span>
          <span className={`${titleFont.className}`}> | en línea</span>
        </Link>
      </div>
      {/* Center menu */}
      <div className="hidden sm:block">
        <Link
          href={"/category/ferreteria"}
          className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`}
        >
          Ferretería
        </Link>
        <Link
          href={"/category/corralon"}
          className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`}
        >
          Corralón
        </Link>
        <Link
          href={"/category/aridos"}
          className={`${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`}
        >
          Áridos
        </Link>
      </div>

      {/* Search - Cart - Menu */}
      <div className="flex items-center">
        <SearchBox />
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 -top-2 font-medium bg-gray-400 -right-2 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          <IoMenuOutline className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};
