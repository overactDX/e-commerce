"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInformation } from "@/Redux/Cartslice";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

const HomePage = () => {
  const dispatch = useDispatch();
  const [products, setProduct] = useState([]);

  function handleSearch(term) {
    console.log(`Searching for: ${term}`);
  }

  const getProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/");
      const data = await res.json();
      // console.log(data?.products);
      setProduct(data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAdd = (product) => {
    dispatch(addInformation(product));
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <div className="productsWrapper">
        {products?.map((product) => (
          <div key={product.id} className="w-full ">
            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <div className="relative pb-48 overflow-hidden p-2">
                  <Image
                    className="absolute inset-0 h-full w-full object-contain"
                    src={product?.thumbnail}
                    alt="img"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    {product?.category}
                  </span>
                  <h2 className="mt-2 mb-2 font-bold">{product.title}</h2>
                  <p className="text-sm truncate-3-lines">
                    {product.description}
                  </p>
                </div>

                <div className="text-xs text-gray-700">
                  <div className="p-3 flex items-center text-sm text-gray-600">
                    <Rating
                      name="text-feedback"
                      value={product?.rating || 0}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon fontSize="inherit" />}
                    />
                    <span className="ml-2">{product?.rating?.count}</span>
                  </div>
                </div>
              </Link>

              <div className="p-4 border-t border-b space-y-2">
                <div className="flex justify-end gap-2">
                  <span className="font-bold text-xl text-end block uppercase">
                    price :{" "}
                  </span>
                  <span className="font-bold text-xl text-end block">
                    {product.price} $
                  </span>
                </div>
                <div className="flex justify-end items-center">
                  <button className="btn" onClick={() => handleAdd(product)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
