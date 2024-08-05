import Link from "next/link";
import React from "react";

export default async function Products() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return (
    <>
      <h1 className="text-3xl p-2">Products</h1>
      <ul>
        {products.map((productItem) => {
          return (
            <li key={productItem.id} className="ml-2">
              <Link href={`products/${productItem.id}`}>
                {productItem.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
