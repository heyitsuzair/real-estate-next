import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-slate-800 border-t-2 border-red-500 flex flex-col items-center gap-6 md:flex-row justify-between text-white p-16"
      id="footer"
    >
      <strong className="text-xl md:text-2xl lg:text-3xl">
        All Rights Reserved &#174;
      </strong>
      <strong className="text-xl md:text-2xl lg:text-3xl">
        Made With &#x2764; By
        <a
          href="//github.com/heyitsuzair"
          className="text-red-500"
          target="_blank"
          rel="noreferrer"
        >
          {""} UZAIR
        </a>
      </strong>
    </footer>
  );
};

export default Footer;
