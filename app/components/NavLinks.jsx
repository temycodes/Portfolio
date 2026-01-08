import React from "react";

const NavLinks = ({ href, title }) => {
  return (
    <a
      href={href}
      className='block py-2 pl-2 pr-2 text-(--midnight-900) font-semibold uppercase hover:text-(--violet-700)'
      onClick={() => {
        document.getElementById(href).scrollIntoView({ behavior: "smooth" });
      }}
    >
      {title}
    </a>
  );
};

export default NavLinks;
