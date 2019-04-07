import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", "Arial", sans-serif;
`;

const P = styled.p`
  width: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 20px;
    margin: 0 5px;
  }

  &.first {
    justify-content: flex-end;
  }
`;

const Link = styled.a`
  margin-left: 4px;
`;

const footer = () => {
  return (
    <StyledFooter>
      <P className="first">
        <a href="https://github.com/RicardoAgra">
          <i className="fab fa-github" />
        </a>{" "}
        Made by Ricardo Agra,{" "}
      </P>
      <P>
        <i className="fab fa-react" />
        Powered by{" "}
        <Link className="react-link" href="https://reactjs.org/">
          {" "}
          React
        </Link>
        .
      </P>
    </StyledFooter>
  );
};

export default footer;
