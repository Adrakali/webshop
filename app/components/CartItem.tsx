"use client";

import { IProduct } from "@/interfaces";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { HiTrash } from "react-icons/hi";

interface Props {
  product: IProduct;
}

function CartItem({ product }: Props) {
  const { removeFromCart, total, setTotal, quantRef } = useContext(CartContext);
  const [quant, setQuant] = React.useState(1);
  const itemSpecificTotal = product.price * quant;

  function handleAdd() {
    setQuant((prev) => prev + 1);
    setTotal((prev) => prev + product.price);
  }

  function handleRemove() {
    if (quant === 1) return;
    setQuant((prev) => prev - 1);
    setTotal((prev) => prev - product.price);
  }

  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="flex">
        <button
          className="bg-black p-2 text-white hover:bg-gray-800"
          onClick={handleRemove}>
          -
        </button>
        <input
          type="number"
          className="w-16 bg-gray-200 p-2 text-center"
          value={quant}
          ref={quantRef}
        />
        <button
          className="bg-black p-2 text-white hover:bg-gray-800"
          onClick={handleAdd}>
          +
        </button>
      </div>
      <div>
        <h3 className="max-w-[15ch] truncate text-sm">{product.title}</h3>
        <p>{itemSpecificTotal}</p>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="rounded-md bg-red-600 p-4 text-base text-white"
          onClick={() => removeFromCart(product.id)}>
          <HiTrash />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
