import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export const Header = () => {
  return (
    <nav>
    <h1>TechStar</h1>
    <main>
    <HashLink to={"/#home"}>Home</HashLink>
    <Link to={"/contact"}>constact</Link>
    <HashLink to={"/#about"}>about</HashLink>
    <HashLink to={"/#brands"}>brands</HashLink>
    <Link to={"/services"}>services</Link>

    </main>
    </nav>
  )
}
export default Header;
