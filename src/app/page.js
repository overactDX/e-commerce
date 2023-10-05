"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const HomePage = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} class="w-full ">
          {/* href={product?.id} */}
          <a
            class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          >
            <div class="relative pb-48 overflow-hidden p-2">
              <img
                class="absolute inset-0 h-full w-full object-contain"
                src={product.image}
                alt="img"
              />
            </div>
            <div class="p-4">
              <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {product?.category}
              </span>
              <h2 class="mt-2 mb-2 font-bold">{product.title}</h2>
              <p class="text-sm truncate-3-lines">{product.description}</p>
              <span class="mt-3 font-bold text-xl text-end block">{product.price} $</span>
              <div class="flex justify-end items-center">
                <button className="btn" onClick={() => handleAdd(product)}>
                  Add to cart
                </button>
              </div>
            </div>

            <div class="border-t border-b text-xs text-gray-700">
              <div class="p-4 flex items-center text-sm text-gray-600">
                <Rating
                  name="text-feedback"
                  value={product?.rating?.rate || 0}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                />
                <span class="ml-2">{product?.rating?.count}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
