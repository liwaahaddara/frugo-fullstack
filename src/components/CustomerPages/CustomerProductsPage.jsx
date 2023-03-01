// import UI components
import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerProductList from "./CustomerProductList"

export default function CustomerProductsPage() {
    return (
        <>
            <CustomerNavBar />
            <div className="customer-homepage-info">
                <span>Merchant/City: (Customer City)</span><span> Welcome (Customer)!</span>
            </div>
            <h1>PRODUCTS</h1>
            <CustomerProductList />
        </>
    )
}