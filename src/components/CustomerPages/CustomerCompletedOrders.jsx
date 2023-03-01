// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"

import Title from "../styled/Title"

export default function CustomerCompletedOrders() {
    return (
        <>
            <CustomerNavBar />
            <div className="customer-info">
                <span>Merchant/City: (Customer City)</span><span> Welcome (Customer)!</span>
            </div>
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


