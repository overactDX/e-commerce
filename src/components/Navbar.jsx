"use client";
import React, { useEffect } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span>Redux Next.js</span>

        <div>
            <Link className='navLink' style={{fontWeight:'bolder'}} href={'/'}>Home</Link>
            <Link className='navLink' style={{fontWeight:'bolder',marginRight:'7px'}} href={'/cart'}>Cart</Link>
            <span style={{fontWeight:'bolder'}}>item : {item.length}</span>
        </div>
    </div>
  )
}

export default Navbar