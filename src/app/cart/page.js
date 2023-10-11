"use client";
import React, { useEffect, useState } from "react";
import {
  remove,
  incrementQuantity,
  decrementQuantity,
} from "@/Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const CartPages = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  useEffect(() => {}, [cartItem]);

  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };
  
  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <div className="cartWrapper">
      {Object.values(
        cartItem.reduce((acc, item) => {
          if (!acc[item.id]) {
            acc[item.id] = { ...item };
            acc[item.id].length = 0;
          }
          acc[item.id].length += 1;
          return acc;
        }, {})
      ).map((item, index) => (
        <div
          className="flex items-center -mx-8 px-6 py-5 rounded-xl bg-slate-300 hover:bg-gray-400 mb-2"
          key={index}
        >
          <div className="flex w-2/5">
            <div className="w-20">
              <Image
                className="h-24"
                src={item.image}
                alt="img"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.title}</span>
              <p
                className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer uppercase"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </p>
            </div>
          </div>

          <div className="flex justify-center w-1/5">
            <button className="btn" onClick={() => handleIncrement(item)}>
              +
            </button>
            <input
              className="mx-2 border text-center w-8"
              type="text"
              value={item.length}
              disabled
            />
            <button className="btn" onClick={() => handleDecrement(item)}>
              -
            </button>
          </div>

          <span className="text-center w-1/5 font-semibold text-sm">
            ${item?.price?.toFixed(2)}
          </span>

          <span className="text-center w-1/5 font-semibold text-sm">
            <p>PRICE : {item.length * item?.price}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default CartPages;
