import "./footer.scss";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <a
          className="font-bold mb-5 hover:text-pink-500 hover:underline underline-offset-2 socialIcons"
          href="https://github.com/StarDust130"
          target="_blank"
          rel="noreferrer"
        >
          Created by StarDust🌟
        </a>
        <div className="infoText">
          Discover the latest information about your favorite movies and TV
          shows at MovieHub. Explore in-depth details, reviews, and
          behind-the-scenes content. Uncover the magic of cinema with MovieHub -
          your ultimate source for entertainment updates. MovieHub is dedicated
          to providing accurate and up-to-date information about the world of
          entertainment.
        </div>
        <div className="socialIcons">
          <a
            className="flex gap-3"
            href="https://github.com/StarDust130"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <FaGithub />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
