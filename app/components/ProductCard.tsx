import React from "react";
import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi";
import { IProduct } from "interfaces";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

interface Props {
  product: IProduct;
}

function ProductCard({ product }: Props) {
  const { items, addToCart } = useContext(CartContext);

  function handleClick(product: IProduct) {
    addToCart(product);
  }

  return (
    <article key={product.id} className="flex h-full flex-col border p-4">
      <div className="relative mb-8 h-56">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-sm">{product.title}</h3>
        <p className="my-2 text-xs">{product.category}</p>
        <p className="text-sm font-bold">$ {product.price}</p>
      </div>
      <button
        className="mt-4 flex w-full items-center justify-center gap-2 self-end rounded-md bg-black py-2 text-xs font-bold text-white"
        onClick={() => handleClick(product)}>
        <HiShoppingBag className="text-base" />
        Lägg till i varukorg
      </button>
    </article>
  );
}

export default ProductCard;
