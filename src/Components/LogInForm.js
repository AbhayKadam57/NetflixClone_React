import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled.div`
  width: 30%;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 30px 0;
  flex-direction: column;

  p {
    color: gray;
  }

  span {
    color: white;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Small = styled.small`
  color: red;
  display: ${(props) => (props.error ? "block" : "none")};
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 3em;
  background-color: rgba(59, 59, 59, 1);
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 8px 10px;
  color: white;
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #e50914;
  border-radius: 6px;
  color: white;
  border: none;
  height: 3em;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

const Approval = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: gray;
  a {
    font-size: 12px;
  }
`;

const Radio = styled.input`
  width: 1.2em;
  height: 1.2em; ;
`;

const LogInForm = () => {
  const [username, setUserName] = useState();

  const [password, setPassword] = useState();

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUserName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .then(() => window.location.assign("/profiles"))
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(true);
      });

    console.log("hello");
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h1>Sign In</h1>
          <Inputs>
            <Input
              placeholder="Email or phone number"
              type="email"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </Inputs>
          <Buttons>
            <Button type="submit" style={{ width: "100%" }}>
              Sign In
            </Button>

            <Approval>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Radio type="checkbox" />
                <small>Remember me</small>
              </div>
              <a href="#" style={{ color: "gray" }}>
                Need help?
              </a>
            </Approval>
          </Buttons>
          <Small error={error}>Please enter valid username and password</Small>
        </Form>
        <div>
          <p>
            New to NetFlix{" "}
            <Link to="/signin" style={{ color: "white" }}>
              Sign up here
            </Link>
          </p>
        </div>
      </FormContainer>
    </Container>
  );
};

export default LogInForm;
