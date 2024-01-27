import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Products() {
  const { product } = useSelector((state) => state.products);
  console.log(product);
  return (
    <div className="flex flex-wrap gap-10 px-10 justify-center">
        <p className="w-full text-center text-5xl font-semibold">Products</p>
      {product.map((product) => (
        <div key={product.id} className="border border-slate-300 rounded-md">
          <img
            src={product.thumbnail}
            alt="title"
            className="w-80 h-60 border-b-2 rounded-t-md"
          />
          <div className="p-3">
            <p className="font-semibold text-slate-500 text-sm my-2">{product.title}</p>
            <p className="font-semibold text-lg w-72">{product.description.length > 40 ? product.description.substring(0, 40) : product.description}...</p>
            <div className="flex gap-10 items-center my-2">
                <p className="text-md">{product.rating}⭐</p>
                <p className="text-lg font-semibold">$ {product.price}</p>
            </div>
            <div className="flex gap-6">
                <button className="bg-red-500 p-2 px-6 text-white rounded-md cursor-pointer">Add to cart</button>
                <Link to={`/product/${product.id}`} className="bg-blue-500 p-2 px-6 text-white rounded-md cursor-pointer">Buy Now</Link>
            </div>
          </div>
        </div>          
      ))}
    </div>
  );
}

export default Products;
