// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"
import DummyTextGroup from "../DummyText"



export default function CustomerHomePage() {
    return (
        <>
            <CustomerNavBar />
            <div className="user-info">
                <span>Merchant/City: (Customer City)</span><span> Welcome (Customer)!</span>
            </div>
            <h2 style={{
                color: "dodgerblue", backgroundColor: "black",
                marginTop: "10px"
            }}
            >YOUR HOME ESSENTIALS, DELIVERED STRAIGHT TO YOUR DOOR!</h2>
            <DummyTextGroup />
        </>
    )
}


