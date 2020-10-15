import React, {useMemo} from 'react';
import CountUp from "react-countup";
import dollarSvg from "../../assets/dollar.svg";
import arrowDownSvg from "../../assets/arrow-down.svg"
import arrowUpSvg from "../../assets/arrow-up.svg";

import { CardsBox } from "./Styles-ResultsWalletBox";

interface IResultsWalletBox {
  title: string;
  amount: number;
  footerLabel: string;
  icons: "dollar" | "arrowUp" | "arrowDown";
  color: string;
}

const ResultsWalletBox: React.FC<IResultsWalletBox> = ({title, amount, footerLabel, icons , color }) => {
  const iconSelected = useMemo(() => {
    switch (icons) {
      case "dollar":
        return dollarSvg
      case "arrowUp":
        return arrowUpSvg
      case "arrowDown":
        return arrowDownSvg

      default:
        return undefined;
    }

  }, [icons])

  return (
    <>
      <CardsBox color={color}>
        <span>{title}</span>
        <h1>
          <CountUp
            end={amount}
            prefix={"R$"}
            separator="."
            decimal=","
            decimals={2}
            preserveValue={true}
          />
        </h1>
        <small>{footerLabel}</small>
        <img src={iconSelected} alt={title}/>
      </CardsBox>
    </>
  );
};

export default ResultsWalletBox;
