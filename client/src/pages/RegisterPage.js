import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { ModalContext } from "../context/ModalContext";

export const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const {setIsModalOpen} = useContext(ModalContext);
    useEffect(() => {
        setIsModalOpen(false);
    }, []);

    const checkData = (e) => {
        e.preventDefault();
        password === password2 ? handleRegister() : alert("Couldn't register");
    }
    const handleRegister = async() => {
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'}
        });
        if(response.status === 200) {
            alert('Registration successful');
        } 
        else {
            alert('Registration failed');
        }
    }

    return (
        <div className="login-wrapper">
            <div className="container">
                <div className="login">
                    <div>
                        <h2>Create an account!</h2>
                        <p>Please enter your details</p>
                    </div>
                    <form onSubmit={checkData}>
                        <label>Username</label>
                        <input placeholder="Enter your username" value={username} onChange={e => setUsername(e.target.value)} required/>
                        
                        <label>Password</label>
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        required
                        />
                        
                        <label>Confirm password</label>
                        <input 
                        type="password" 
                        placeholder="Enter your password" 
                        value={password2} 
                        onChange={e => setPassword2(e.target.value)}
                        required
                        />
                        
                        <input type="submit" className="login-submit"/>
                    </form>
                    <NavLink to="/login">Already have an account? Sign In</NavLink>
                </div>
            </div>
        </div>
        )
}
