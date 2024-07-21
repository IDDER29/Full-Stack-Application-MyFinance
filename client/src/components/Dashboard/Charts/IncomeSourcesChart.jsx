import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useDashboardContext } from "../../../contexts/DashboardContext";

// Custom Tooltip Function
const customTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-stone-50 ">
        <p className="pr-4">{`${payload[0].payload.source} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const IncomeSourcesChart = () => {
  const { sourcesOfIncome, colors } = useDashboardContext();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="amount"
          data={sourcesOfIncome}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {sourcesOfIncome.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={customTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IncomeSourcesChart;
