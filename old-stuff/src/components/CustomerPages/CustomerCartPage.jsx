// import hardcoded product images (fruits/veg)
import Apples from "../images/apples.jpg"
import Cherries from "../images/cherries.jpg"
import Carrots from "../images/carrots.jpg"
import Potatoes from "../images/potatoes.jpg"
import Oranges from "../images/oranges.jpg"
import Tomatoes from "../images/tomatoes.jpg"

import Title from "../styled/Title"
import GridBox from "../styled/GridBox"
import CustomerCartItem from "./CustomerCartItem"

import CustomerNavBar from "../NavBar/CustomerNavbar"
import CustomerWelcome from "./CustomerWelcome"

import { useNavigate } from "react-router-dom"

function CustomerCartPage() {
    const navigate = useNavigate()

    const products = [
        {
            id: 1,
            name: "Apple",
            price: 4.78,
            type: "Fruit",
            image: Apples,
            stock: 10
        },
        {
            id: 2,
            name: "Cherry",
            price: 4.78,
            type: "Fruit",
            image: Cherries,
            stock: 10
        },
        {
            id: 3,
            name: "Carrot",
            price: 4.78,
            type: "Vegetable",
            image: Carrots,
            stock: 10
        },
        {
            id: 4,
            name: "Potatoe",
            price: 4.78,
            type: "Vegetable",
            image: Potatoes,
            stock: 10
        },
        {
            id: 5,
            name: "Orange",
            price: 4.78,
            type: "Fruit",
            image: Oranges,
            stock: 10
        },
        {
            id: 6,
            name: "Tomato",
            price: 4.78,
            type: "Vegetable",
            image: Tomatoes,
            stock: 10
        },

    ]

    return (
        <div id="cart">
            <CustomerNavBar />
            <CustomerWelcome />
            <Title>Cart</Title>
            <GridBox>
                {products.map((item) => {
                    return <CustomerCartItem key={item.id} item={item} />
                })}
            </GridBox>
            <Title>TOTAL: $(total amount)</Title>
            <div className="cart-bottom-buttons">
                <span><button onClick={() => { navigate(`/customer/order-confirmation`) }} className="cart-bottom-button">Send Order to Merchant</button></span>
                <span><button className="cart-bottom-button">Clear Cart</button></span>
            </div>
        </div>
    )
}


export default CustomerCartPage