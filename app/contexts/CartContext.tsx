"use client";
import { IProduct } from "@/interfaces";
import React from "react";
import { createContext } from "react";

interface ICartContext {
  items: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  getQuantity: (id: number) => number;
  getTotalQuantity: () => number;
  getTotalCost: () => number;
  decreaseQuantity: (id: number) => void;
  increaseQuantity: (id: number) => void;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  addToCart: () => {},
  removeFromCart: () => {},
  decreaseQuantity: () => {},
  getQuantity: () => 0,
  getTotalCost: () => 0,
  increaseQuantity: () => {},
  getTotalQuantity: () => 0,
});

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = React.useState<IProduct[]>([]);

  const items = cart; // declare and initialize the 'items' variable with the current cart state

  function getQuantity(id: number) {
    return cart.find((item) => item.id === id)?.quantity || 0;
  }

  function addToCart(product: IProduct) {
    const quantity = getQuantity(product.id);
    quantity === 0
      ? setCart([...cart, { ...product, quantity: product.quantity ?? +1 }])
      : setCart([...cart]);
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function decreaseQuantity(id: number) {
    const quantity = getQuantity(id);
    quantity === 1
      ? removeFromCart(id)
      : setCart(
          cart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity ? item.quantity - 1 : 1 }
              : item
          )
        );
  }

  function increaseQuantity(id: number) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity ? item.quantity + 1 : 1 }
          : item
      )
    );
  }

  function getTotalCost() {
    return +cart
      .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  }

  function getTotalQuantity() {
    return +cart.reduce((acc, item) => acc + (item.quantity ?? 0), 0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        getQuantity,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        getTotalCost,
        getTotalQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
