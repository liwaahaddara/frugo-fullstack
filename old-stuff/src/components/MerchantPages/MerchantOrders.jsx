// UI Components for HomePage
import MerchantNavBar from "../NavBar/MerchantNavBar"
import MerchantWelcome from "./MerchantWelcome"

import Title from "../styled/Title"

export default function MerchantOrders() {
    return (
        <>
            <MerchantNavBar />
            <MerchantWelcome />
            <section>
                <Title>Pending Orders</Title>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button>Confirm Order</button>
                        <button>Cancel Order</button>
                        <br />
                    </div>
                </div>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button>Confirm Order</button>
                        <button>Cancel Order</button>
                        <br />
                    </div>
                </div>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <div
                        className="buttons-styled">
                        <button>Confirm Order</button>
                        <button>Cancel Order</button>
                        <br />
                    </div>
                </div>
            </section>
            <br />
            <br />
            <section>
                <Title>Completed Orders</Title>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
                <div className="confirmation-details">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
            </section>
        </>
    )
}


