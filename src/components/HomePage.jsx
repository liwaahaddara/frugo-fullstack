import { Outlet, NavLink } from "react-router-dom"

// UI Components for HomePage
import NavBar from "./styled/NavBar"
import { DummyTextGroup } from "./DummyText"



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

            <h2>YOUR HOME ESSENTIALS, DELIVERED STRAIGHT TO YOUR DOOR!</h2>
            <DummyTextGroup />
            <Outlet />
        </>
    )
}


