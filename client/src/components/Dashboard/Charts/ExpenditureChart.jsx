import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useDashboardContext } from "../../../contexts/DashboardContext";

const ExpenditureChart = () => {
  const { expenseDataM } = useDashboardContext();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={expenseDataM}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Utilitaires" stackId="a" fill="#8884d8" />
        <Bar dataKey="Alimentation" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Logement" stackId="a" fill="#ffc658" />
        <Bar dataKey="Autres" stackId="a" fill="#ff8042" />
        <Bar dataKey="Economiser" stackId="a" fill="#8dd1e1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenditureChart;
