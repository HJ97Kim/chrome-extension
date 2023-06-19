// base
import React, { useEffect, useState } from "react";

// packages
import styled from "styled-components";

// etc
import "./App.css";
import doge from "./assets/images/doge.gif";
import { coinAPI, ResponseCoinInfo } from "./modules";

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
    width: max-content;
    height: 10rem;
    margin-top: 10rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 2rem;
    background: rgba(255, 255, 255, 0.5);
  }
`;

function App() {
  const [coinInfo, setCoinInfo] = useState<ResponseCoinInfo[]>([]);

  useEffect(() => {
    (async () => {
      const data = await coinAPI.getCoinInfo();
      setCoinInfo(data);
    })();
  }, []);

  return (
    <StyledApp className="App" doge={doge}>
      <div className="title">COIN</div>
      <div className="content">
        {!coinInfo?.length && "LOADING..."}
        {coinInfo?.map((item) => {
          return (
            <div key={item.currency}>
              <div>{`구매평균가(${item.currency}): ${Number(
                item.avg_buy_price
              ).toLocaleString()} ${item.unit_currency}`}</div>
            </div>
          );
        })}
      </div>
    </StyledApp>
  );
}

export default App;
