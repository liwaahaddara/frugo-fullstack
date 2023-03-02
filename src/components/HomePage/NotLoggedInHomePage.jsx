import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// import styled UI components
import Button from "../styled/Button"

// UI Components for HomePage
import NotLoggedInNavBar from "../NavBar/NotLoggedInNavBar"
import DummyTextGroup from "../DummyText"



export default function NotLoggedInHomePage() {
    const navigate = useNavigate()
    return (
        <>
            <NotLoggedInNavBar />
            <section className="dev-buttons">
                <Button onClick={() => { navigate(`/customer`) }}
                >Customer</Button>
                <Button onClick={() => { navigate(`/merchant`) }}
                >Merchant</Button>
                <Button onClick={() => { navigate(`/admin`) }}
                >Admin</Button>
            </section>
            <h2 style={{ color: "dodgerblue", backgroundColor: "black" }}
            >YOUR HOME ESSENTIALS, DELIVERED STRAIGHT TO YOUR DOOR!</h2>
            <DummyTextGroup />
            <Outlet />
        </>
    )
}


