import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import UI components
import Button from "../styled/Button"
import Wrapper from "../styled/Wrapper"



export default function CustomerProduct(props) {

    const product = props.productInfo
    const [productOnCart, setProductOnCart] = useState(0)

    const navigate = useNavigate()


    function handleAddToCart() {
        setProductOnCart((prevState) => {
            return prevState + 1
        })
    }
    return (
        <Wrapper onClick={() => {
            navigate(`products/${product.id}`)
        }}>
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
            <div style={{
                fontFamily: "Verdana, sans-serif"
            }}>{product.type}</div>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                    color: "red",
                    marginTop: 10,
                    marginBottom: 10
                }}
            >
                ${product.price}
            </div>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                }}>Stock: {product.stock}</div>
            <div
                style={{
                    fontFamily: "Verdana, sans-serif",
                }}>Stock Left: {product.stock - productOnCart}</div>

            <Button
                greaterThanfive={productOnCart > 5}
                disabled={product.stock === productOnCart}
                onClick={handleAddToCart}
            >
                {product.stock === productOnCart ? "No Stock Left" : "Add To Cart"}
            </Button>
        </Wrapper>
    )
}