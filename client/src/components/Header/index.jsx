import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = true;
  const [displayNav, setDisplayNav] = useState(false);
  const desktop = window.innerWidth > 1024;
  const mobile = window.innerWidth < 1024;

  const navLinks = [
    { href: "/profile", name: "Profile" },
    {
      href: "/favorites",
      name: "My Favorite",
      icon: <i className="fa-solid fa-heart fa-xl"></i>,
    },
    { href: "/myOrders", name: "My Orders" },
    {
      href: "/shoppingCart",
      name: "Shopping Cart",
      icon: <i className="fa-solid fa-cart-shopping fa-xl"></i>,
    },
    { href: "/aboutUs", name: "About us" },
    { href: "/Logout", name: "Logout" },
  ];

  useEffect(() => {
    const navLinksListHidden = () => displayNav && setDisplayNav(false);

    window.addEventListener("click", navLinksListHidden);

    return () => {
      window.removeEventListener("click", navLinksListHidden);
    };
  }, [displayNav]);

  const navLinksItemsDesktop = navLinks.map(
    ({ href, name }) =>
      name !== "My Favorite" &&
      name !== "Shopping Cart" && (
        <Link
          to={href}
          key={name}
          className={!displayNav ? "nav-links-hidden" : "nav-links-visible"}
        >
          <li>{name}</li>
        </Link>
      )
  );

  const navLinksItemsMobile = navLinks.map(({ href, name }) => (
    <Link
      to={href}
      key={name}
      className={!displayNav ? "nav-links-hidden" : "nav-links-visible"}
    >
      <li>{name}</li>
    </Link>
  ));

  const favoritesAndCart = navLinks.map(
    ({ href, name, icon }) =>
      (name === "My Favorite" || name === "Shopping Cart") && (
        <Link to={href} key={name} className="nav-links-visible">
          {icon}
        </Link>
      )
  );

  const loginBtn = (
    <button
      className="login-header-btn cursor"
      onClick={() => navigate("/login", { replace: true })}
    >
      Login
    </button>
  );

  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src="/images/logo.png" alt="Hommy food" />
      </Link>
      <div
        onClick={() => isLogin && desktop && setDisplayNav(!displayNav)}
        className={`user-info-container-header ${isLogin && "cursor"}`}
      >
        <img
          // todo user.photo
          src={isLogin ? "/images/user.png" : "/images/user.png"}
          alt="user"
          className="user-img-header"
        />

        <h5
          // todo user.username.last
          className="user-name-header"
        >
          Hello {isLogin ? "Ashraf" : "user"}
        </h5>
      </div>
      {mobile && isLogin && (
        <i
          className="fa-solid fa-bars fa-xl nav-btn"
          onClick={() => setDisplayNav(!displayNav)}
        ></i>
      )}
      {mobile && !isLogin && loginBtn}
      <ul className="nav-links-container">
        {desktop ? navLinksItemsDesktop : navLinksItemsMobile}
      </ul>
      {desktop && (
        <ul className="cart-fav-container">
          {isLogin ? favoritesAndCart : loginBtn}
        </ul>
      )}
    </header>
  );
};

export default Header;
