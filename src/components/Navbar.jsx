"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:'10px',
      }}
    >
      <span>BEN STORE</span>
      <div>
        <Link className="navLink" style={{ fontWeight: "bolder" }} href={"/"}>
          Home
        </Link>
        <Link
          className="navLink"
          style={{ fontWeight: "bolder", marginRight: "7px" }}
          href={"/cart"}
        >
          <Badge badgeContent={item.length} color="error">
            <ShoppingCartTwoToneIcon color="action" />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
