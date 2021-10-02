import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--dark);
  color: white;
  padding: 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
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
        <i className="fab fa-linkedin" />
        &nbsp;Made by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ricardo-agra-800057128/"
        >
          Ricardo Agra
        </Link>
      </P>
      <P>
        <i className="fab fa-react" />
        &nbsp;Powered by
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          React
        </Link>
        .
      </P>
    </StyledFooter>
  );
};

export default footer;
