import { useContext, useEffect, useState } from "react"
import { NavLink, Navigate } from "react-router-dom"
import { UserContext, ModalContext } from "../context";

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setIsModalOpen} = useContext(ModalContext);
    const {setUserInfo} = useContext(UserContext)
    useEffect(() => {
        setIsModalOpen(false);
    }, []);
    
    const handleLogin = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include'
        });
        if(response.status === 200) {
            alert("Login successful");
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        }
        else {
            alert("Login failed");
        }
    }

    if(redirect) {
        return <Navigate to={'/'}/>
    }

    return (
    <div className="login-wrapper">
        <div className="container">
            <div className="login">
                <div>
                    <h2>Welcome back!</h2>
                    <p>Please enter your details</p>
                </div>
                <form onSubmit={handleLogin}>
                    <label>Username</label>
                    <input 
                    placeholder="Enter username" 
                    value={username} 
                    onChange={ev => setUsername(ev.target.value)}
                    />
                    <label>Password</label>
                    <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}
                    />
                    <input type="submit" className="login-submit"/>
                </form>
                <NavLink to="/join">Don't have an account? Sign Up</NavLink>
            </div>
        </div>
    </div>
    )
}