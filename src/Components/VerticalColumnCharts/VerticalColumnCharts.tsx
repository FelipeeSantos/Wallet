import React from 'react';
import {ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import formatCurrency from "../../utils/formatCurrency";

import {
  SideLeft,
  Legend,
  LegendContainer,
  SideLeftDiv,
} from "./Styles-VerticalColumnCharts"

interface IVerticalColumnCharts {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[]
}

const VerticalColumnCharts: React.FC<IVerticalColumnCharts> = ({ title, data }) => {
  return (
      <SideLeft>
        <SideLeftDiv>
          <div>
            <h2>{title}</h2>
            <LegendContainer>
              {
                data.map((items) => (
                  <Legend key={items.name} color={items.color}>
                    <div>{items.percent}%</div>
                    <span>{items.name}</span>
                  </Legend>))
              }
            </LegendContainer>
          </div>
          <ResponsiveContainer>
            <BarChart data={data}>
              <Bar dataKey={"amount"}>
                {
                  data.map((indicator) => (
                    <Cell
                      key={indicator.name}
                      cursor="pointer"
                      fill={indicator.color}
                    />
                  ))
                }
              </Bar>
              <Tooltip
                cursor={{ fill: "none" }}
                formatter={(value) => formatCurrency(Number(value))}
              />
            </BarChart>
          </ResponsiveContainer>
        </SideLeftDiv>
      </SideLeft>
  );
};

export default VerticalColumnCharts;
