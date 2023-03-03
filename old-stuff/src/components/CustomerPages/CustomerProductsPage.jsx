// import styled components
import Title from "../styled/Title"

// import UI components
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"
import CustomerProductList from "./CustomerProductList"

export default function CustomerProductsPage() {
    return (
        <>
            <CustomerNavBar />
            <CustomerWelcome />
            <Title>PRODUCTS</Title>
            <CustomerProductList />
        </>
    )
}