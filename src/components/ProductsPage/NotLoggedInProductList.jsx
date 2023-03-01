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



export default function NotLoggedInProductList(props) {
    const products = [
        {
            id: 1,
            name: "Apple",
            type: "Fruit",
            image: Apples,
        },
        {
            id: 2,
            name: "Cherry",
            type: "Fruit",
            image: Cherries,
        },
        {
            id: 3,
            name: "Carrot",
            type: "Vegetable",
            image: Carrots,
        },
        {
            id: 4,
            name: "Potatoe",
            type: "Vegetable",
            image: Potatoes,
        },
        {
            id: 5,
            name: "Orange",
            type: "Fruit",
            image: Oranges,
        },
        {
            id: 6,
            name: "Tomato",
            type: "Vegetable",
            image: Tomatoes,
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

