"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiChevronDown, HiShoppingBag, HiUserCircle } from "react-icons/hi";
import { Menu } from "@headlessui/react";
import Cart from "./Cart";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Nav() {
  const [isHidden, setIsHidden] = useState(true);
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="container z-20 flex items-center justify-between border-b-[1px] border-gray-200 py-10">
        <div className="flex items-center gap-12">
          <Link href="/" className="logo text-xl font-extrabold">
            LOGO
          </Link>
          <Menu as="nav">
            <ul className="flex gap-8 font-bold">
              <Menu.Button as="li" className="flex items-center gap-1">
                Products
                <HiChevronDown />
                <Menu.Items as="div" className="bg-gray-400">
                  <Menu.Item as="p" className="cursor-pointer">
                    Sport
                  </Menu.Item>
                  <Menu.Item as="p" className="cursor-pointer">
                    Elektronik
                  </Menu.Item>
                  <Menu.Item as="p" className="cursor-pointer">
                    Dam
                  </Menu.Item>
                  <Menu.Item as="p" className="cursor-pointer">
                    Herr
                  </Menu.Item>
                </Menu.Items>
              </Menu.Button>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
          </Menu>
        </div>
        <div>
          <ul className="flex items-center gap-8 font-bold">
            <li>
              <Link href="/products" className="flex items-center gap-1">
                <HiUserCircle className="text-lg" />
                Logga in
              </Link>
            </li>
            <li
              className="relative flex cursor-pointer items-center gap-1"
              onClick={() => setIsHidden(!isHidden)}>
              <HiShoppingBag className="text-lg" />
              Varukorg
              {cart.length > 0 && (
                <p className="absolute -top-4 -right-4 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 p-3 text-center text-xs font-bold text-white">
                  {cart.length}
                </p>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Cart isHidden={isHidden} setIsHidden={setIsHidden} />
    </header>
  );
}

export default Nav;
