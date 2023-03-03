// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"

import Title from "../styled/Title"

export default function CustomerCompletedOrders() {
    return (
        <>
            <CustomerNavBar />
            <CustomerWelcome />
            <section>
                <Title>Your Completed Orders</Title>
                <div className="confirmation-details">
                    <p className="completed-orders">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <p className="completed-orders">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <p className="completed-orders">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <p className="completed-orders">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
            </section>
        </>
    )
}


