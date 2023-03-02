// import the styled UI components
import Title from "../styled/Title"
import InputWrapper from "../styled/InputWrapper"

import AdminNavBar from "../NavBar/AdminNavBar"



export default function AdminUpdateMerchant() {
    return (
        <>
            <AdminNavBar />
            <div className="user-info">
                <span> Welcome (Admin)!</span>
            </div>
            <Title>EDIT MERCHANT DETAILS</Title>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <InputWrapper>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="Name">Name:</label>
                    <input
                        type="text"
                        name="Name"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="city">City:</label>
                    <select name="city" id="city">
                        <option value="Melbourne">Melbourne</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Adelaide">Adelaide</option>
                        <option value="Brisbane">Brisbane</option>
                        <option value="Perth">Perth</option>
                        <option value="Darwin">Darwin</option>
                        <option value="Hobart">Hobart</option>
                    </select>
                </InputWrapper>
                <div>
                    <input className="button-styled"
                        type="submit" value="UPDATE MERCHANT" />
                </div>
            </form>
        </>
    )
}