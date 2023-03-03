// import { useNavigate } from "react-router-dom"

// import UI components
import Button from "../styled/Button"
import Wrapper from "../styled/Wrapper"



export default function MerchantProduct(props) {

    const product = props.productInfo

    return (
        <Wrapper>
            <img
                style={{
                    height: 200,
                }}
                src={product.image}
                alt={product.name}
            ></img>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                    fontSize: 25,
                    fontWeight: 700,
                    marginBottom: 10,
                }}
            >
                {product.name}
            </div>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                    color: "red",
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                ${product.price}
                <span><button className="product-edit-button">Edit</button></span>
            </div>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                }}>Stock: {product.stock}
                <span><button className="product-edit-button">Edit</button></span>
            </div>

            <Button style={{ marginTop: "15px" }}>
                Remove from Inventory
            </Button>
        </Wrapper>
    )
}