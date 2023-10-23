import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { ModalContext } from "../context/ModalContext";

export const LoginPage = () => {
    const {setIsModalOpen} = useContext(ModalContext);
    useEffect(() => {
        setIsModalOpen(false);
    }, [])
    

    return (
    <div className="login-wrapper">
        <div className="container">
            <div className="login">
                <div>
                    <h2>Welcome back!</h2>
                    <p>Please enter your details</p>
                </div>
                <form>
                    <label>Username</label>
                    <input placeholder="Enter username"/>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="submit" className="login-submit"/>
                </form>
                <NavLink to="/join">Don't have an account? Sign Up</NavLink>
            </div>
        </div>
    </div>
    )
}