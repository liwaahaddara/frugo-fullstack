// import the styled UI components
import Title from "./styled/Title"
import InputWrapper from "./styled/InputWrapper"

import NotLoggedInNavBar from "./NavBar/NotLoggedInNavBar"



export default function Register() {
    return (
        <>
            <NotLoggedInNavBar />
            <Title>Register</Title>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <InputWrapper>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
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
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                    />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        name="city"
                    />
                </InputWrapper>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </>
    )
}