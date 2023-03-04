"use client";

import React, { useEffect } from "react";
import { IProduct } from "interfaces";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const slicedProducts = products.filter((product: IProduct) => {
    return product.category != "electronics";
  });

  return (
    <section className="container my-20">
      <h2 className="mb-8">Produkter</h2>
      <div className="grid grid-cols-fluid gap-4">
        {slicedProducts.map((product: IProduct) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}

export default Products;
