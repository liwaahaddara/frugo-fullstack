// import UI components
import NotLoggedInNavBar from "../NavBar/NotLoggedInNavBar"
import ProductList from "./ProductList"

export default function NotLoggedInProductsPage() {
    return (
        <>
            <NotLoggedInNavBar />
            <h1>PRODUCTS</h1>
            <ProductList />
        </>
    )
}