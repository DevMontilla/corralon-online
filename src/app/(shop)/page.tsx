import { ProductCard, Title } from "@/components";

const soldadora = {
  id: 1,
  name: "Vessanti",
  shortDescription: "Bidet para inodoro de dos",
  fullDescription: 'Saoldadora de alta calidad',
  price: 100.00,
  salePrice: 90.00,
  image: "https://arcencohogareasy.vtexassets.com/arquivos/ids/322675-500-auto?v=637877990570000000&width=500&height=auto&aspect=true",
  slug: 'soldadora-de-alta-calidad',
  discounted: true
}

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2"/>
      <ProductCard product={soldadora}/>
    </>
  );
}
