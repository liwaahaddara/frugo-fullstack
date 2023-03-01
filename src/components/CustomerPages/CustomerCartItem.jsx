import { useState } from "react"

const CustomerCartItem = (props) => {

    const [noOfItems, setNoOfitems] = useState(0)

    const item = props.item

    const handleDecrease = () => {
        setNoOfitems((prevState) => {
            return prevState - 1
        })
    }

    const handleIncrease = () => {
        setNoOfitems((prevState) => {
            return prevState + 1
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <img
                style={{
                    height: 200,
                }}
                src={item.image}
                alt="Bag"
            ></img>
            <div
                style={{
                    fontSize: 25,
                    fontWeight: 700,
                    marginBottom: 10,
                }}
            >
                {item.title}
            </div>
            <div>{item.description}</div>
            <div
                style={{
                    color: "red",
                    marginTop: 10,
                }}
            >
                ${item.price}
            </div>
            <div>Stock: {item.stock - noOfItems}</div>
            <div style={{
                marginTop: 5
            }}>
                <button disabled={noOfItems === 0} onClick={handleDecrease}>-</button>
                <span style={{
                    margin: '0px 5px'
                }}>{noOfItems}</span>
                <button disabled={noOfItems === item.stock} onClick={handleIncrease}>+</button>
            </div>
            <div>Sub-Total Price: ${(noOfItems * item.price).toFixed(2)}</div>
        </div>
    )
}

export default CustomerCartItem
