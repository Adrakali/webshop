import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { HiX } from "react-icons/hi";

interface Props {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ isHidden, setIsHidden }: Props) {
  const { items, getTotalCost, getTotalQuantity } = useContext(CartContext);

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
      <h2 className="mb-8">
        {getTotalQuantity()}
        {getTotalQuantity() === 1 ? " item" : " items"} in your cart
      </h2>
      {items.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}
      {items.length > 0 ? (
        <div>
          <div className="mt-16 flex items-baseline justify-between gap-4">
            <p className="text-sm">Total cost:</p>
            <p className="font-bold">$ {getTotalCost()}</p>
          </div>
          <button className="mt-8 rounded-md bg-black px-8 py-4 font-bold text-white">
            Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </aside>
  );
}

export default Cart;
