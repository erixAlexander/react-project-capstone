import { Link } from "react-router-dom";

const navList = [
  { title: "Home", link: "/" },
  { title: "About", link: "about" },
  { title: "Menu", link: "menu" },
  { title: "Reservations", link: "reservations" },
  { title: "Order Online", link: "order-online" },
  { title: "Login", link: "login" },
];
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="ul">
        {navList.map(({ title, link }) => {
          return (
            <li key={title}>
              <Link className="a-tag" to={link}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
