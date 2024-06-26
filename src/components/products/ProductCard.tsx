import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  salePrice: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  discounted?: boolean;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-md overflow-hidden max-w-44 bg-white p-2 min-h-[340px] max-h-[340px] flex flex-col justify-between">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded  max-w-40 max-h-40"
          width={500}
          height={500}
        />
      </Link>
      <div className="p-0 flex flex-col">
        <div className="w-full flex justify-between items-center">
          {product.discounted && (
            <>
              <span className="font-extralight text-2xl">
                ${product.salePrice}
              </span>
              <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs font-medium">
                -{((product.price - product.salePrice) / product.price) * 100}
                <span className="font-light">%</span>
              </span>
            </>
          )}
        </div>
        {product.discounted ? (
          <span className="font-light text-sm">
            Normal: <span className="line-through">${product.price}</span>
          </span>
        ) : (
          <span className="font-extralight text-2xl">${product.price}</span>
        )}
        <Link
          href={`/product/${product.slug}`}
          className="my-1 font-bold truncate"
        >
          {product.name}
        </Link>
      </div>
      <span className="font-extralight text-sm mb-1 truncate text-wrap line-clamp-2">
        {product.shortDescription}
      </span>
      <div className="mt-auto w-full flex">
        <Link
          href={`/product/${product.slug}`}
          className="bg-blue-500 rounded-md text-white p-2 w-full text-center text-sm"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
};
