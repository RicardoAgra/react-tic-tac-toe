import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 100px;
  background: transparent;
  font-size: 50px;
  cursor: pointer;

  svg {
    display: none;
  }

  &.times .fa-times {
    display: inline;
  }
  &.circle .fa-circle {
    display: inline;
  }
  &.previous-move {
    background: var(--primary);
    color: var(--secondary-light);
  }
`;

const square = ({ content, isLastMove, clickHandler }) => {
  var classList = ["square"];
  if (isLastMove) {
    classList.push("previous-move");
  }
  if (content === "x") {
    classList.push("times");
  }
  if (content === "o") {
    classList.push("circle");
  }

  return (
    <Button className={classList.join(" ")} onClick={clickHandler}>
      <i className="fas fa-times " />
      <i className="far fa-circle" />
    </Button>
  );
};

export default React.memo(square, (prevProps, nextProps) => prevProps.content === nextProps.content && prevProps.isLastMove === nextProps.isLastMove);
