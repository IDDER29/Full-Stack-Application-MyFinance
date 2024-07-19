import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDashboardContext } from "../../../contexts/DashboardContext";

const EarningsCostsChart = ({ showEarnings, showCosts }) => {
  const { chartData: data } = useDashboardContext();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        {showEarnings && (
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="earnings"
            stroke="#8884d8"
          />
        )}
        {showCosts && (
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="costs"
            stroke="#82ca9d"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EarningsCostsChart;
