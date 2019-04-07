import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "../Components/title";
import Square from "../Components/square";
import Board from "../Components/board";

const StyledMain = styled.main`
  margin: 100px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

class Main extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.nextAction === "humanSelect" || this.props.nextAction === "humanSelect");
  }

  componentDidUpdate() {
    console.log("Main updated!");
  }

  render() {
    const { nextAction, selectSymbolHandler } = this.props;
    var content = null;

    if (nextAction === "humanSelect") {
      content = (
        <div>
          <Square
            content="x"
            clickHandler={selectSymbolHandler.bind(null, "x", "o")}
          />
          <Square
            content="o"
            clickHandler={selectSymbolHandler.bind(null, "o", "x")}
          />
        </div>
      );
    } else {
      content = <Board />;
    }

    return (
      <StyledMain>
        <Title />
        {content}
      </StyledMain>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSymbolHandler: (humanChar, computerChar) =>
      dispatch({
        type: "SELECT_SYMBOL",
        value: { human: humanChar, computer: computerChar }
      })
  };
};

const mapStateToProps = state => {
  return {
    nextAction: state.nextAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
