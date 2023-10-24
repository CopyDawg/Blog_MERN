import { Link, NavLink } from "react-router-dom";
import rightArrowIcon from "../assets/right-arrow-navmenu.png";
import burgerMenu from "../assets/burger-menu.png";
import logo from "../assets/cc2.png";
import { useContext, useEffect, useState } from "react";
import { UserContext, ModalContext } from "../context";

export const Navbar = () => {

    const {isModalOpen, handleModal} = useContext(ModalContext);
    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }
    
    const username = userInfo?.username;

    return (
        <header className="navbar">
            <Link to="/" className="logo">
                <img src={logo}/>
            </Link>
            <nav className="nav-list">
                { username && (
                    <>
                        <NavLink to="/write">Write new article</NavLink>
                        <NavLink onClick={logout}>Logout</NavLink>
                    </>
                )}
                { !username && (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/join">Register</NavLink>
                    </>
                )}
            </nav>
            { isModalOpen && (
                <>
                    <img src={rightArrowIcon} className="right-arrow" onClick={handleModal}/>
                    <nav className="nav-list-mobile">
                        { username && (
                            <>
                                <NavLink to="/write" className="nav-link">Write new article</NavLink>
                                <NavLink to="/logout" className="nav-link">Logout</NavLink>
                            </>
                        )}
                        { !username && (
                            <>
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                                <NavLink to="/join" className="nav-link">Register</NavLink>
                            </>
                        )}
                    </nav>
                </>
            )}
            { !isModalOpen && (
                <img src={burgerMenu} className="burger-menu" onClick={handleModal}/>
            )}
        </header>
    )
}
