"use client";
import { IProduct } from "@/interfaces";
import React, { createRef, useRef } from "react";
import { createContext } from "react";

interface ICartContext {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  quantRef?: React.RefObject<HTMLInputElement>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  quantRef: createRef<HTMLInputElement>(),
  total: 0,
  setTotal: () => {},
});

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState<IProduct[]>([]);
  const [total, setTotal] = React.useState(0);

  //TODO: Fix this. Resets the quantity to 1 when you adding different item to the cart.
  function addToCart(product: IProduct) {
    if (cart.find((item) => item.id === product.id)) {
      const item = cart.find((item) => item.id === product.id);
      if (item) {
        const currentValue = quantRef.current?.value ?? "0";
        quantRef.current!.value = String(Number(currentValue) + 1);
      }
    } else {
      setCart([...cart, product]);
    }
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const quantRef = useRef<HTMLInputElement>(null);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        quantRef,
        total,
        setTotal,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
