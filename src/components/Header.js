import React from "react";
import Logo from "../images/logo.svg";

export default function Header() {
  //show/hide or toggle a navigation menu when the menu button is clicked
  const showNav = () => {
    // select the first element with the class name "menu-btn"assigns it to the menuBtn constant.
    const menuBtn = document.querySelector(".menu-btn");
    // select the first <nav> element in the HTML document and assigns it to the navbar constant
    const navbar = document.querySelector("nav");
    //When menuBtn element. is clicked, the code within the arrow function will be executed.
    menuBtn.addEventListener("click", () => {
      //toggles the "open" class on the navbar element. If the element already has the "open" class, it will be removed; otherwise, it will be added.
      navbar.classList.toggle("open");
      menuBtn.classList.toggle("rotate");
    });
  };
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Careers</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>Products</button>
          </li>
          <li>
            <button>Support</button>
          </li>
        </ul>
      </nav>
      <div className="menu-btn" onClick={() => showNav()}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
    </header>
  );
}
