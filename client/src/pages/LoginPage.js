import { Navbar } from "../components"

export const LoginPage = () => {
    return (
    <div className="login-wrapper">
        <Navbar/>
        <div className="container">
            <div className="login">
                <h2>Welcome back!</h2>
                <form>
                    <input/>
                    <input/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    </div>
    )
}
