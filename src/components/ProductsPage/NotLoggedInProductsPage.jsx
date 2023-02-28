// import UI components
import NotLoggedInNavBar from "../NavBar/NotLoggedInNavBar"
import NotLoggedInProductList from "./NotLoggedInProductList"

export default function NotLoggedInProductsPage() {
    return (
        <>
            <NotLoggedInNavBar />
            <h1>PRODUCTS</h1>
            <NotLoggedInProductList />
        </>
    )
}