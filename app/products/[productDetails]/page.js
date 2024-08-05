import React from "react";

export default async function ProductDetails({ params }) {
  const { productDetails } = params;
  const response = await fetch(
    `https://dummyjson.com/products/${productDetails}`
  );
  const data = await response.json();

  return (
    <div className="text-xl">
      <p className="m-2">Title: {data.title}</p>
      <p className="m-2">Description: {data.description}</p>
      <p className="m-2">Price: ${data.price}</p>
    </div>
  );
}
