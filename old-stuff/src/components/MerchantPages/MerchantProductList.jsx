// import hardcoded product images (fruits/veg)
import Apples from "../images/apples.jpg"
import Cherries from "../images/cherries.jpg"
import Carrots from "../images/carrots.jpg"
import Potatoes from "../images/potatoes.jpg"
import Oranges from "../images/oranges.jpg"
import Tomatoes from "../images/tomatoes.jpg"

import MerchantProduct from "./MerchantProduct"

import styled from "styled-components"

// import styled UI components
import GridBox from "../styled/GridBox"

export const CustomGrid = styled(GridBox)`
    padding: 30px;
`

export default function MerchantProductList(props) {
    const products = [
        {
            id: 1,
            name: "Apple",
            price: 4.78,
            image: Apples,
            stock: 10
        },
        {
            id: 2,
            name: "Cherry",
            price: 4.78,
            image: Cherries,
            stock: 10
        },
        {
            id: 3,
            name: "Carrot",
            price: 4.78,
            image: Carrots,
            stock: 10
        },
        {
            id: 4,
            name: "Potatoe",
            price: 4.78,
            image: Potatoes,
            stock: 10
        },
        {
            id: 5,
            name: "Orange",
            price: 4.78,
            image: Oranges,
            stock: 10
        },
        {
            id: 6,
            name: "Tomato",
            price: 4.78,
            image: Tomatoes,
            stock: 10
        },

    ]


    return (
        <div id="products">
            <CustomGrid>
                {products.map((product) => {
                    return <MerchantProduct
                        key={product.id}
                        productInfo={product}
                        setProduct={props.setProduct} />
                })}
            </CustomGrid>
        </div>
    )
}