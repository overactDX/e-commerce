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
  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ item }));
  };
  const handleDecrement = (item) => {
    dispatch(decrementQuantity({ item }));
  };
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

  return (
    <div className="cartWrapper">
      {Object.values(
        cartItem.reduce((acc, item) => {
          if (!acc[item.id]) {
            acc[item.id] = { ...item, quantity: 0 };
          }
          acc[item.id].quantity += 1;
          return acc;
        }, {})
      ).map((item, index) => (
        <div key={index} className="cartCard">
          <Image src={item.image} alt="img" width={80} height={80} />
          <h4>{item.title}</h4>
          <h5>{item.price}</h5>
          <button className="btn" onClick={() => handleIncrement(item)}>
            +
          </button>
          <p>Quantity: {item.quantity}</p>
          <button className="btn" onClick={() => handleDecrement(item.id)}>
            -
          </button>
          <button className="btn" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="cartTotal">
        <p>Total Price: {allTotal} THB</p>
      </div>
    </div>
  );
};

export default cartPages;
