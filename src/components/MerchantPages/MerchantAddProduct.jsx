import { useNavigate } from "react-router-dom"

// import styled components
import Title from "../styled/Title"
import Button from "../styled/Button"

// import UI components
import MerchantNavBar from "../NavBar/MerchantNavBar"

export default function MerchantAddProduct() {
    const navigate = useNavigate()
    return (
        <>
            <MerchantNavBar />
            <div className="user-info">
                <span>Merchant/City: (Merchant City)</span><span> Welcome (Merchant)!</span>
            </div>
            <section>
                <Title>NEW PRODUCT DETAILS:</Title>
                <div className="confirmation-details">
                    <h3>Name:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Image:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Price</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                    <br />
                    <h3>Quantity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eaque?</p>
                </div>
            </section>
            <Button
                onClick={() => { navigate(`/merchant`) }}
                style={{ marginTop: "20px" }}
            >ADD PRODUCT</Button>
        </>
    )
}