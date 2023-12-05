/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./header.scss";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //! Make Sure to Scroll to Top on Page Change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  //! Hide Header on Scroll Down and Show on Scroll Up
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  //! Hide  Header Bg on Scroll Down
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  //! Show SearchBar on Search Page
  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  //! Show in Mobile View
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  //! Search Functionality
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 100);
    }
  };

  //! Naviagte to Pages
  const navigationHandler = (type) => {
    if (type === "movies") {
      navigate("/explore/movie");
    } else if (type === "tv") {
      navigate("/explore/tv");
    } else {
      navigate("/");
    }
    setMobileMenu(false);
  };

  return (
    <>
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <ContentWrapper>
          <Link to="/">
          <div className="logo flex items-center transition duration-300 transform hover:scale-105">
            
              <img
                src={
                  "https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-popcorn-products-packaging-wanicon-lineal-color-wanicon.png"
                }
                alt="Logo"
                onClick={navigationHandler}
              />{" "}
              <span className="text-white  font-extrabold md:text-2xl tracking-wide   ">
                ScreenXpress
              </span>
          </div>
            </Link>
          <ul className="menuItems">
            <li
              className="menuItem"
              onClick={() => navigationHandler("movies")}
            >
              Movies
            </li>
            <li className="menuItem" onClick={() => navigationHandler("tv")}>
              Tv Shows
            </li>
            <li className="menuItem">
              {" "}
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>

          {/* Mobile Menu Items */}
          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
          </div>
        </ContentWrapper>

        {/* SearchBar 😶‍🌫️  */}
        {showSearch && (
          <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie, tv show......"
                  onKeyUp={searchQueryHandler}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
            </ContentWrapper>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
