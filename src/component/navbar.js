// import React from "react";


"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Nav() {
  return (
    <Navbar  rounded className="bg-transparent  mx-auto  border border-x-0 border-t-0 border-b-white py-6">
      <Navbar.Brand  href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Dev-Ruqoyyah</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-xl font-light text-white" >
          Home
        </Navbar.Link>
        <Navbar.Link  href="#about" className="text-xl font-light text-white ">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl font-light text-white">Skills</Navbar.Link>
        <Navbar.Link href="#service" className="text-xl font-light text-white">Services</Navbar.Link>
        <Navbar.Link href="#project" className="text-xl font-light text-white">Portfolio</Navbar.Link>
        <Navbar.Link href="#" className="text-xl font-light text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
