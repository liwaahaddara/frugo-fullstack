// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"

import DummyTextGroup from "../DummyText"

export default function CustomerHomePage() {
    return (
        <>
            <CustomerNavBar />
            <CustomerWelcome />
            <h2 style={{
                color: "dodgerblue", backgroundColor: "black",
                marginTop: "10px"
            }}
            >YOUR HOME ESSENTIALS, DELIVERED STRAIGHT TO YOUR DOOR!</h2>
            <DummyTextGroup />
        </>
    )
}


