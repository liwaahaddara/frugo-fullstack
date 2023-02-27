// import the styled UI components
import Title from "./styled/Title"
import InputWrapper from "./styled/InputWrapper"

import NotLoggedInNavBar from "./NavBar/NotLoggedInNavBar"



export default function Login() {
    return (
        <>
            <NotLoggedInNavBar />
            <Title>Login</Title>
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
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    )
}