// UI Components for HomePage
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"

import Title from "../styled/Title"

export default function CustomerOrderConfirmation() {


    return (
        <>
            <CustomerNavBar />
            <CustomerWelcome />
            <section>
                <h2 className="confirmation-heading">Your order has been sent!</h2>

                <p className="confirmation-sub">Currently pending, order will be successfully completed once confirmed by our merchant and you'll be notified!</p>

                <Title>Order #(number)</Title>

                <div className="confirmation-details">
                    <h3>Items/Quantity Purchased</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Customer Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Merchant Name/City</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Date & Time Purchased</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
            </section>
        </>
    )
}


