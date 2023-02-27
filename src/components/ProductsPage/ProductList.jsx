// import hardcoded product images (fruits/veg)
import Apples from "../images/apples.jpg"
import Cherries from "../images/cherries.jpg"
import Carrots from "../images/carrots.jpg"
import Potatoes from "../images/potatoes.jpg"
import Oranges from "../images/oranges.jpg"
import Tomatoes from "../images/tomatoes.jpg"

import styled from "styled-components"

//importing default exports - name can be different
import Product from "./Product"

// import styled UI components
import GridBox from "../styled/GridBox"

export const CustomGrid = styled(GridBox)`
    padding: 30px;
`



export default function ProductList(props) {
    const products = [
        {
            id: 1,
            name: "Apple",
            type: "Fruit",
            price: 6.80,
            image: Apples,
            stock: 10,
        },
        {
            id: 2,
            name: "Cherry",
            type: "Fruit",
            price: 13.50,
            image: Cherries,
            stock: 10,
        },
        {
            id: 3,
            name: "Carrot",
            type: "Vegetable",
            price: 4.20,
            image: Carrots,
            stock: 10,
        },
        {
            id: 4,
            name: "Potatoe",
            type: "Vegetable",
            price: 12.60,
            image: Potatoes,
            stock: 10,
        },
        {
            id: 5,
            name: "Orange",
            type: "Fruit",
            price: 7.80,
            image: Oranges,
            stock: 10,
        },
        {
            id: 6,
            name: "Tomato",
            type: "Vegetable",
            price: 10.10,
            image: Tomatoes,
            stock: 10,
        },

    ]


    return (
        <div id="products">
            <CustomGrid>
                {products.map((product) => {
                    return <Product
                        key={product.id}
                        productInfo={product}
                        setProduct={props.setProduct} />
                })}
            </CustomGrid>
        </div>
    )
}

