import axios from "axios";
import { ResponseCoinInfo } from "..";

const baseURL = "http://112.146.200.187/";

export const coinAPI = {
  getCoinInfo: () =>
    axios
      .get<ResponseCoinInfo[]>(baseURL)
      .then((res) => res.data)
      .catch((err) => {
        console.log("ERR", err);
        return [
          {
            currency: "BTC",
            balance: "0.19071978",
            locked: "0",
            avg_buy_price: "36700839.4933",
            avg_buy_price_modified: false,
            unit_currency: "KRW",
          },
          {
            currency: "KRW",
            balance: "0.56487897",
            locked: "0",
            avg_buy_price: "0",
            avg_buy_price_modified: true,
            unit_currency: "KRW",
          },
        ];
      }),
};
