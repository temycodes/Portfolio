"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { href: "#about", title: "about" },
  { href: "#skills", title: "skills" },
  { href: "#projects", title: "projects" },
  { href: "#contact", title: "contact me" },
];

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-md border-white/20'>
      <div className='flex flex-wrap items-center justify-between px-4 mx-auto py-2'>
        <Link href={"/"} className='md:text-2xl text-(--midnight-900) font-semibold text-xl limelight'>
          {`<temycodes/>`}
        </Link>
        <div className='mobile-menu block md:hidden'>
          {navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(false)}
              className='flex items-center border rounded px-3 py-2 border-none'
            >
              <FaEye className='h-5 w-6 text-(--violet-700)' />
            </button>
          ) : (
            <button onClick={() => setNavBarOpen(true)} className='flex items-center border-none rounded px-3 py-2'>
              <FaEyeSlash className='h-5 w-6 text-(--midnight-900)' />
            </button>
          )}
        </div>
        <div className='hidden  menu md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
