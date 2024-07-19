import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const incomeData = [
  { source: "Salary", amount: 3000 },
  { source: "Freelance", amount: 1500 },
  { source: "Investments", amount: 700 },
  { source: "Other", amount: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const IncomeSourcesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="amount"
          data={incomeData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {incomeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IncomeSourcesChart;
