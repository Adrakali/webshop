import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { HiX } from "react-icons/hi";

interface Props {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ isHidden, setIsHidden }: Props) {
  const { cart, total } = useContext(CartContext);

  return (
    <aside
      className={`${
        isHidden ? "hidden w-0" : "fixed w-auto"
      } right-0 top-0 bottom-0 z-10 border bg-white p-16 transition-all duration-500 ease-in-out`}>
      <button
        className="mb-16 flex w-full justify-end text-lg"
        onClick={() => setIsHidden(!isHidden)}>
        <HiX />
      </button>
      {cart.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      {
        <div className="mt-16">
          <p className="text-sm">Total:</p>
          <p className="font-bold">
            $ {cart.reduce((acc, item) => acc + item.price, 0)}
          </p>
        </div>
      }
    </aside>
  );
}

export default Cart;
