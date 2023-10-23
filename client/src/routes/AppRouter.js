import "../App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages";
import { Layout } from "../layout/Layout";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={ <HomePage/> } />
                <Route path="/login" element={ <LoginPage/> } />
                <Route path="/join" element={ <RegisterPage/> } />
            </Route>
        </Routes>
    )
}
