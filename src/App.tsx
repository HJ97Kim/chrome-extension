// base
import React from "react";

// packages
import styled from "styled-components";

// etc
import "./App.css";
import doge from "./assets/images/doge.gif";

const StyledApp = styled.div<{ doge: string }>`
  width: 48rem;
  min-height: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.doge});
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    text-align: center;
    padding: 4rem 0;
    font-size: 4.2rem;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  .content {
    width: 30rem;
    height: 10rem;
    margin-top: 10rem;
    text-align: center;
    font-size: 2rem;
    background: rgba(255, 255, 255, 0.5);
  }
`;

function App() {
  return (
    <StyledApp className="App" doge={doge}>
      <div className="title">COIN</div>
      <div className="content">검색 및 가격</div>
    </StyledApp>
  );
}

export default App;
