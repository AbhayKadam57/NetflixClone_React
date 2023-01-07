import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
  const [user, setUser] = useState("kadamabhay40@gmail.com");

  const [checkUser, setCheckUser] = useState("");

  return (
    <Container>
      <FormContainer>
        <Form>
          <h1>Sign In</h1>
          <Inputs>
            <Input
              placeholder="Email or phone number"
              onChange={(e) => setCheckUser(e.target.value)}
              type="email"
            />
            <Input type="password" placeholder="Password" />
          </Inputs>
          <Buttons>
            <Link
              to={user === checkUser ? "/home" : ""}
              style={{ width: "100%" }}
            >
              <Button>Sign In</Button>
            </Link>

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
        </Form>
        <div>
          <p>
            New to NetFlix{" "}
            <Link to="/">
              <span>
                <a style={{ color: "white" }} href="#">
                  Sign up here
                </a>
              </span>
            </Link>
          </p>
        </div>
      </FormContainer>
    </Container>
  );
};

export default LogInForm;
