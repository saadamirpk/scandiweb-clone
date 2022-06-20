import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [backWhite, setBackWhite] = useState(false);

  function handleBack() {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y;
    if (y > 1) {
      setBackWhite(true);
    } else {
      setBackWhite(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => handleBack());
    return window.removeEventListener("scroll", () => handleBack());
  }, []);

  return (
    <nav className={(backWhite ? "back-white" : "") + " sm:h-16 h-12 "}>
      <div className="logo sm:text-2xl text-xl">scandiweb</div>
      <div className="menu"></div>
    </nav>
  );
}
