import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

export const Layout = () => {
    return (
        <main>
            <Navbar/>
            <Outlet/>
        </main>
    )
}
