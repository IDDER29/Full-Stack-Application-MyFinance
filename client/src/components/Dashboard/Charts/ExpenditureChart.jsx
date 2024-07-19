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

const expenseData = [
  {
    month: "January",
    Utilitaires: 400,
    Alimentation: 300,
    Logement: 300,
    Autres: 200,
    Economiser: 100,
  },
  {
    month: "February",
    Utilitaires: 500,
    Alimentation: 400,
    Logement: 300,
    Autres: 200,
    Economiser: 150,
  },

  // Add more data as needed
];

const ExpenditureChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={expenseData}
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
