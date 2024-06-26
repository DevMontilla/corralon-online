import {
  ProductMobileSlideShow,
  ProductSlideShow,
  QuantitySelector,
} from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function ({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid gap-3 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-9">
      <div className="hidden 2xl:block"></div>
      <div className="hidden 2xl:block"></div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 lg:col-span-2 px-5">
        <h1 className="antialiased font-bold text-xl">{product.title}</h1>
        {product.discounted ? (
          <>
            <span className="font-light text-sm">
              Normal: <span className="line-through">${product.price}</span>
            </span>
            <div className="mb-5">
              <span className="font-light text-2xl pr-5">${product.salePrice}</span>
              <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-medium">
                -
                {(
                  ((product.price - product.salePrice) / product.price) *
                  100
                ).toFixed(0)}
                <span className="font-light">%</span>
              </span>
            </div>
          </>
        ) : (
          <div className="mb-5"><span className="font-light text-2xl">${product.price}</span></div>
        )}

        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />
        <button className="my-5 btn-primary">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
      <div className="hidden 2xl:block"></div>
      <div className="hidden 2xl:block"></div>
    </div>
  );
}
