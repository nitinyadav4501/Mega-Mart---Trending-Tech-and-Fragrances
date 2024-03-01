import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function Card({ product }) {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { addToCart, cart, removeCart } = useCart();

  const IsProductAvailable = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (IsProductAvailable) {
      removeCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="border border-black shadow-xl hover:scale-105 transition-all w-60 flex items-center flex-col p-4 rounded-md text-black">
        <Link to="/product-detail" state={{ product }}>
          <img
            onClick={handleScroll}
            className="h-44 w-44"
            src={product.thumbnail}
          />
        </Link>
        <h1 className=" font-bold py-4">
          {product.title.split("").slice(0,15).join("") + "..."}
        </h1>
        <p>{product.description.split("").slice(0, 15).join("") + "..."}</p>
        <h1 className="font-bold text-xl text-orange-500">
          ${product.price}{" "}
          <del className="text-gray-500 text-sm">{product.stock}$</del>
        </h1>
        <div className="flex justify-between gap-x-1 font-bold pt-5">
          <div className="border-2 border-black hover:bg-gray-300 px-2  rounded-full">
            <button onClick={handleAddToCart}>{IsProductAvailable?'Remove':'Add to Cart'}</button>
          </div>
          <div className="bg-black text-white border-2 border-black hover:border-orange-500 hover:bg-orange-500 px-2 rounded-full">
            <Link to="/product-detail" state={{ product }}>
              <button onClick={handleScroll}>Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
