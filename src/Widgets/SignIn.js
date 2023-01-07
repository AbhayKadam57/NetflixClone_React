import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  /* background-color: red; */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
`;

const Select = styled.select`
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-family: "Open sans";
  width: 6em;
  padding: 5px;
`;

const Option = styled.option`
  font-family: "Open sans";
  display: flex;
  background-color: gray;
`;

const Button = styled.button`
  background-color: #e50914;
  color: #fff;
  font-family: "Open sans";
  font-size: 17px;
  padding: 5px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const SignIn = () => {
  return (
    <Container>
      <Select>
        <Option>English</Option>
        <Option>हिंदी</Option>
      </Select>
      <Link to="/login">
        <Button>Sign In</Button>
      </Link>
    </Container>
  );
};

export default SignIn;
