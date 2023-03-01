// import UI components
import Wrapper from "../styled/Wrapper"

export default function Product(props) {

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
            <div style={{
                fontFamily: "Verdana, sans-serif"
            }}>{product.type}</div>
        </Wrapper>
    )
}
