// import styled components
import Title from "../styled/Title"

// import UI components
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerProductList from "./CustomerProductList"

export default function CustomerProductsPage() {
    return (
        <>
            <CustomerNavBar />
            <div className="customer-info">
                <span>Merchant/City: (Customer City)</span><span> Welcome (Customer)!</span>
            </div>
            <Title>PRODUCTS</Title>
            <CustomerProductList />
        </>
    )
}