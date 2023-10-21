import "../App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/login" element={ <LoginPage/> } />
            <Route path="/join" element={ <RegisterPage/> } />
        </Routes>
    )
}
