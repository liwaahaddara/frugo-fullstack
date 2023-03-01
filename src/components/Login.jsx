// import the styled UI components
import Title from "./styled/Title";
import InputWrapper from "./styled/InputWrapper";

import NotLoggedInNavBar from "./NavBar/NotLoggedInNavBar";
import axios from "axios";

export default function Login(props) {
  const { user, setUser, token, setToken } = props;
  const handleChange = async (event) => {
    event.preventDefault();
    setUser((user) => {
      console.log(user);
      return {
        ...user,
        [event.target.name]: event.target.value,
      };
    });
  };
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </InputWrapper>
        <div>
          <input className="login-button" type="submit" value="SUBMIT" />
        </div>
      </form>
    </>
  );
}
