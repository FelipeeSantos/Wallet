import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts"
import formatCurrency from "../../utils/formatCurrency";

import { CartesianChartBoxSection, LegendContainer, Legend } from "./Styles-CartesianChartBox";

interface ICartesianChartBox {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorInput: string;
  lineColorOutput: string;
}

const CartesianChartBox: React.FC<ICartesianChartBox> = ({ data, lineColorInput, lineColorOutput }) => {
  return (
    <CartesianChartBoxSection>
      <div>
        <h2>Balance history</h2>
        <LegendContainer>
          <Legend color={lineColorInput}>
            <div>{}</div>
            <span>Cash Inflows</span>
          </Legend>
          <Legend color={lineColorOutput}>
            <div>{}</div>
            <span>Cash Outflows</span>
          </Legend>
        </LegendContainer>
      </div>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3 " stroke="#CECECE" />
          <XAxis dataKey="month" stroke="#CECECE" />
          <Tooltip formatter={(value) => formatCurrency(Number(value))}/>
          <Line
            name="Cash Inflows"
            dataKey="amountEntry"
            type="monotone"
            stroke={lineColorInput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            name="Cash Outflows"
            dataKey="amountOutput"
            type="monotone"
            stroke={lineColorOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </CartesianChartBoxSection>
  );
};

export default CartesianChartBox;
