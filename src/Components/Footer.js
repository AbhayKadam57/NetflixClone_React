import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #000000;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 70%;
  padding: 3.5em;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    font-size: 1em;
    font-weight: 500;
  }
`;

const FooterDiv = styled.div`
  display: flex;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

const ListItem = styled.li`
  font-size: 0.8em;
  padding: 8px 0;
`;

const Footer = () => {
  const List1 = ["FAQ", "Investor Relation", "Privacy", "Speed Test"];
  const List2 = ["Help Center", "Jobs", "Cookie Preference", "Legal Notice"];
  const List3 = [
    "Account",
    "Ways to watch",
    "Corporate Information",
    "Only on Netflix",
  ];
  const List4 = ["Media Center", "Term of Use", "Contact Us"];

  return (
    <Wrapper>
      <Container>
        <h2>Question? Call 000-000-000</h2>
        <FooterDiv>
          <List>
            {List1.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
          <List>
            {List2.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
          <List>
            {List3.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
          <List>
            {List4.map((item, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </List>
        </FooterDiv>
      </Container>
    </Wrapper>
  );
};

export default Footer;
