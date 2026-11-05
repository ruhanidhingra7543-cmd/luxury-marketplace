import React from 'react';
import { Link } from 'react-router-dom';

export default function TopAppBar({ isScrolled }) {
  return (
    <header
      id="topAppBar"
      className={`sticky top-0 z-30 bg-background/95 backdrop-blur-md flex items-center justify-between px-container-margin py-4 transition-shadow duration-300 ${
        isScrolled ? 'shadow-ambient' : ''
      }`}
    >
      <Link to="/home" className="flex items-center gap-3 no-underline">
        <img
          alt="Artisanal Thread Logo"
          className="w-10 h-10 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ46oBM12OJlppdpYwQeIkfKdpHDoCXWS1zmNNP34RcaxcXk-ZO85y4SXF-0NMLqzt1JTRsYHH0uS6bQvccnHKFMuvmL1_Xtpz3f3VQsCjMsoA_knQEWqik1eUsN3OcZAsThJvuoip6j0SCoLtPGBOFUH_1IK5c1dnB5A8Kqap2-iF2QyICWQFw8ynW1X7o3ainJ5VhAjEgTKFgVn1rQPgAIiL7-mTlOb_3ON_GepcwohcuGvuzc1K3w"
        />
        <h1 className="font-title-md text-title-md text-primary tracking-wider uppercase hidden sm:block">
          Artisanal Thread
        </h1>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          to="/custom-order"
          className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
          aria-label="Custom Order"
        >
          <span className="material-symbols-outlined">design_services</span>
        </Link>
        <Link
          to="/cart"
          className="relative p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
          aria-label="Shopping Bag"
        >
          <span className="material-symbols-outlined">shopping_bag</span>
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-secondary text-on-secondary rounded-full text-[10px] flex items-center justify-center font-bold">
            2
          </span>
        </Link>
      </div>
    </header>
  );
}
