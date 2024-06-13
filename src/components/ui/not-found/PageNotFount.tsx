import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const PageNotFount = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-medium text-lg">Eeepa!</p>
        <p className="font-normal text-lg">
          Lo sentimos mucho, esa ruta no existe.
        </p>
        <p className="mt-5">
          <span className="font-light">Volver a la página de </span>
          <Link
            href={"/"}
            className="transition-all hover:underline font-medium"
          >
            inicio
          </Link>
        </p>
      </div>
    </div>
  );
};
