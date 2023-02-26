import { Outlet, NavLink } from "react-router-dom"
import NavBar from "./styled/NavBar"



export default function HomePage() {
    return (
        <>
            <NavLink
                key="fruGo-title"
                style={{
                    textDecoration: "none"
                }}
                to="/"
            >
                <h1 className="fruGo-title">fruGo</h1>
            </NavLink>
            <NavBar />
            <Outlet />
        </>
    )
}


