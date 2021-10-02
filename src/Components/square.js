import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 10px;
  background: transparent;
  font-size: 50px;
  cursor: pointer;
  border: none;

  &.disabled:hover {
    animation: popin 0.5s;
  }
  &.previous-move {
    background: var(--light);
  }

  i {
    opacity: 0.5;
    transform: scale(0.5);
    transition: all 0.5s;
  }

  i.fas,
  i.far {
    opacity: 1;
    transform: scale(1);
  }
`;

const square = ({ content, isLastMove, clickHandler }) => {
  let classList = ["square"];
  if (isLastMove) {
    classList.push("previous-move");
  }

  return (
    <Button className={classList.join(" ")} onClick={clickHandler}>
      <i className={content}></i>
    </Button>
  );
};

export default React.memo(
  square,
  (prevProps, nextProps) =>
    prevProps.content === nextProps.content &&
    prevProps.isLastMove === nextProps.isLastMove
);
