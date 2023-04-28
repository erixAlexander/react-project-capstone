import React from "react";
import {
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navList = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Menu", link: "menu" },
  { title: "Reservations", link: "reservations" },
  { title: "Order Online", link: "order-online" },
  { title: "Login", link: "login" },
];

const social = [
  { name: "Facebook", link: "https://facebook.com", icon: <FaFacebook /> },
  { name: "Twitter", link: "https://twitter.com", icon: <FaTwitter /> },
  { name: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
  { name: "Address", link: "/contact", icon: <FaAddressBook /> },
  { name: "Number", link: "/contact", icon: <FaPhone /> },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img">
        <img src="restaurant.jpg" alt="" />
      </div>
      <div className="footer-links">
        <h4>Links</h4>
        <ul>
          {navList.map(({ title, link }) => {
            return (
              <li key={title}>
                <Link to={link}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bookmark">
        <h4>Bookmark</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          placeat.
        </p>
      </div>
      <div className="footer-social">
        <h4>Social Links</h4>
        <ul>
          {social.map(({ name, link, icon }) => {
            return (
              <li key={name}>
                <a href={link}>
                  {icon} {name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
