import React from "react";
import { Pie, PieChart as PieChartDiv, ResponsiveContainer, Cell  } from "recharts";
import { DivisionPieChart, SideLeft, LegendContainer, Legend, SideRight } from "./Styles-PieChart";

interface IPieChart {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChart: React.FC<IPieChart> = ({ data }) => {
  return (
    <DivisionPieChart>
      <SideLeft>
        <h2>Rate</h2>
        <LegendContainer>
          {
            data.map((items) => (
              <Legend key={items.name} color={items.color}>
              <div>{items.percent}%</div>
              <span>{items.name}</span>
            </Legend>))
          }
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <PieChartDiv>
            <Pie
              data={data}
              dataKey="percent"
              labelLine={false}
            >
              {
                data.map((items) => (
                  <Cell
                    key={items.name}
                    fill={items.color}
                  />
                ))
              }
            </Pie>
          </PieChartDiv>
        </ResponsiveContainer>
      </SideRight>
    </DivisionPieChart>
  );
};

export default PieChart;
