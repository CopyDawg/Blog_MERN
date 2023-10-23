import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { ModalContext } from "../context/ModalContext";

export const RegisterPage = () => {
    const {setIsModalOpen} = useContext(ModalContext);
    useEffect(() => {
        setIsModalOpen(false);
    }, [])
    
    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="login">
                    <div>
                        <h2>Create an account!</h2>
                        <p>Please enter your details</p>
                    </div>
                    <form>
                        <label>Email</label>
                        <input placeholder="john@gmail.com"/>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password"/>
                        <label>Confirm password</label>
                        <input type="password" placeholder="Enter your password"/>
                        <input type="submit" className="login-submit"/>
                    </form>
                    <NavLink to="/login">Already have an account? Sign In</NavLink>
                </div>
            </div>
        </div>
        )
}
