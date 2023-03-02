import { useNavigate } from "react-router-dom"

// import styled components
import Title from "../styled/Title"
import Button from "../styled/Button"

// import UI components
import MerchantProductList from "./MerchantProductList"
import MerchantNavBar from "../NavBar/MerchantNavBar"

export default function MerchantProductsPage() {
    const navigate = useNavigate()
    return (
        <>
            <MerchantNavBar />
            <div className="user-info">
                <span>Based in: (Merchant City)</span><span> Welcome (Merchant)!</span>
            </div>
            <Title>YOUR PRODUCTS</Title>
            <Button
                onClick={() => { navigate(`/merchant/add-product`) }}
            >ADD PRODUCT</Button>
            <MerchantProductList />
        </>
    )
}