import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Containers/header";
import Main from "./Containers/main";
import Footer from "./Containers/footer";

const Section = styled.section`
  text-align: center;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  background: var(--dark);
`;

class App extends Component {
  render() {
    return (
      <Section className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Section>
    );
  }
}

export default App;
