"use client";
import React, { useEffect, useState } from "react";
import {
  remove,
  incrementQuantity,
  decrementQuantity,
} from "@/Redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const cartPages = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const [allTotal, setAllTotal] = useState(0);

  const handleRemove = (item) => {
    dispatch(remove(item));
  };
  // const handleIncrement = (item) => {
  //   dispatch(incrementQuantity({ item }));
  // };
  // const handleDecrement = (item) => {
  //   dispatch(decrementQuantity({ item }));
  // };
  useEffect(() => {
    calculateAllTotalPrice(cartItem);
  }, [cartItem]);

  const calculateAllTotalPrice = (cartItem) => {
    let AllTotalPrice = 0;
    for (const item of cartItem) {
      AllTotalPrice += item.price * cartItem.length;
    }
    return setAllTotal(AllTotalPrice.toFixed(2));
  };

  const handleIncrement = (itemId) => {
    console.log(itemId);
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
          key={index}
          className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
        >
          <div className="flex w-2/5">
            <div className="w-20">
              <img className="h-24" src={item.image} alt="img" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">{item.title}</span>
              <span className="text-red-500 text-xs">{item.brand}</span>
              <p
                className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
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
            <button className="btn" onClick={() => handleDecrement(item.id)}>
              -
            </button>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            <p>Total Price: {allTotal} THB</p>
          </span>
        </div>
      ))}

      <div className="cartTotal">
        <p>Total Price: {allTotal} THB</p>
      </div>
    </div>
  );
};

export default cartPages;
