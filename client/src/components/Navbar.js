import { Link, NavLink } from "react-router-dom";
import rightArrowIcon from "../assets/right-arrow-navmenu.png";
import burgerMenu from "../assets/burger-menu.png";

export const Navbar = () => {
    return (
        <header className="navbar">
            <Link className="logo">
                <h2>My Blog</h2>
            </Link>
            <nav className="nav-list">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/join">Register</NavLink>
            </nav>
            <img src={burgerMenu} className="burger-menu"/>
            <nav className="nav-list-mobile">
                <Link className="nav-link-logo" to="/" >
                    <h2>My Blog</h2>
                </Link>
                <NavLink className="nav-link" to="/login" >Login</NavLink>
                <NavLink className="nav-link" to="/join" >Register</NavLink>
            </nav>
        </header>
    )
}
