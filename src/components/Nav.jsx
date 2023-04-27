import React from "react";

const navList = [
  { title: "Home", link: "#" },
  { title: "About", link: "#" },
  { title: "Menu", link: "#" },
  { title: "Reservations", link: "#" },
  { title: "Order Online", link: "#" },
  { title: "Login", link: "#" },
];
const Nav = () => {
  return (
    <nav>
      <ul>
        {navList.map(({ title, link }) => {
          return (
            <li key={title}>
              <a href={link}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
