"use client";

import { IProduct } from "@/interfaces";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { HiTrash } from "react-icons/hi";

interface Props {
  product: IProduct;
}

function CartItem({ product }: Props) {
  const { removeFromCart, decreaseQuantity, increaseQuantity, getQuantity } =
    useContext(CartContext);

  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="flex">
        <button
          className="bg-black p-2 text-white hover:bg-gray-800"
          onClick={() => decreaseQuantity(product.id)}>
          -
        </button>
        <input
          type="number"
          className="w-16 bg-gray-200 p-2 text-center"
          value={getQuantity(product.id) ?? 1}
          readOnly
        />
        <button
          className="bg-black p-2 text-white hover:bg-gray-800"
          onClick={() => increaseQuantity(product.id)}>
          +
        </button>
      </div>
      <div>
        <h3 className="max-w-[15ch] truncate text-sm">
          {product.title}
          {product.price}
        </h3>
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
