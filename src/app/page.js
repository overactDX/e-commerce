"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";
import Image from 'next/image';

const HomePage = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);
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
        <div key={product.id} className="card">
          <Image src={product.image} alt="img" width={80} height={80} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
