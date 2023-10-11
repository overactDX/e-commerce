"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <span>BEN STORE</span>
      <div>
        <Link className="navLink" style={{ fontWeight: "bolder" }} href={"/"}>
          <HomeIcon />
        </Link>
        <Link
          className="navLink"
          style={{ fontWeight: "bolder" }}
          href={"/cart"}
        >
          <Badge badgeContent={item.length} color="error">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </Link>
        <Link className="navLink" style={{ fontWeight: "bolder" }} href={"/"}>
          <AccountCircleIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
