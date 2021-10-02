import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin-bottom: 50px;
  color: var(--light);
  font-size: 26px;
  white-space: nowrap;
`;

const title = ({ victory, nextAction }) => {
  const messages = {
    victory: {
      tie: "It's a Tie!",
      human: "Human wins!",
      computer: "Computer wins!",
    },
    next: {
      human: "Turn to move: Human",
      computer: "Turn to move: Computer",
    },
  };
  let message = "";

  if (victory) {
    message = messages.victory[victory];
  } else {
    message = messages.next[nextAction];
  }

  return <StyledTitle>{message}</StyledTitle>;
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(React.memo(title));
