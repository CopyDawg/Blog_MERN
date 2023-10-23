import { Link, NavLink } from "react-router-dom";
import rightArrowIcon from "../assets/right-arrow-navmenu.png";
import burgerMenu from "../assets/burger-menu.png";
import logo from "../assets/cc2.png";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const Navbar = () => {

    const {isModalOpen, handleModal} = useContext(ModalContext);

    return (
        <header className="navbar">
            <Link to="/" className="logo">
                <img src={logo}/>
            </Link>
            <nav className="nav-list">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/join">Register</NavLink>
            </nav>
            { isModalOpen && (
                <>
                    <img src={rightArrowIcon} className="right-arrow" onClick={handleModal}/>
                    <nav className="nav-list-mobile">
                        <NavLink className="nav-link" to="/login" >Login</NavLink>
                        <NavLink className="nav-link" to="/join" >Register</NavLink>
                    </nav>
                </>
            )}
            { !isModalOpen && (
                <img src={burgerMenu} className="burger-menu" onClick={handleModal}/>
            )}
        </header>
    )
}
