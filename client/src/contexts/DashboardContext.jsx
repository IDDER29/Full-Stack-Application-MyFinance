// contexts/DashboardContext.js

import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DashboardContext = createContext();

export function useDashboardContext() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider"
    );
  }
  return context;
}

export function DashboardProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "John Doe",
    monthlySalary: 3000,
    otherIncome: [
      { source: "Freelance", amount: 500 },
      { source: "Investments", amount: 200 },
    ],
  });

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate a server fetch with sample data
    const fetchData = async () => {
      const sampleTransactions = [
        {
          id: 1,
          date: "2024-07-01",
          category: "Utilities",
          amount: 100,
          type: "expense",
        },
        {
          id: 2,
          date: "2024-07-03",
          category: "Groceries",
          amount: 150,
          type: "expense",
        },
        {
          id: 3,
          date: "2024-07-05",
          category: "Rent",
          amount: 800,
          type: "expense",
        },
        {
          id: 4,
          date: "2024-07-10",
          category: "Salary",
          amount: 3000,
          type: "income",
        },
        {
          id: 5,
          date: "2024-07-15",
          category: "Freelance",
          amount: 500,
          type: "income",
        },
        {
          id: 6,
          date: "2024-07-20",
          category: "Investments",
          amount: 200,
          type: "income",
        },
      ];
      setTransactions(sampleTransactions);
    };

    fetchData();
  }, []);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);
  const remainingAmount = totalIncome - totalExpenses;

  const expenseData = transactions
    .filter((t) => t.type === "expense")
    .map((t) => ({
      category: t.category,
      amount: t.amount,
      color: getColorByCategory(t.category),
    }));

  const incomeData = transactions
    .filter((t) => t.type === "income")
    .map((t) => ({
      category: t.category,
      amount: t.amount,
    }));

  const expenseDataByMonth = getMonthlyData(transactions, "expense");
  const incomeDataByMonth = getMonthlyData(transactions, "income");

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

  const goalAmount = 2000;
  const consumedAmount = totalExpenses;

  function getColorByCategory(category) {
    const colors = {
      Utilities: "bg-red-500",
      Groceries: "bg-blue-500",
      Rent: "bg-green-500",
      Others: "bg-yellow-500",
      Savings: "bg-purple-500",
    };
    return colors[category] || "bg-gray-500";
  }

  function getMonthlyData(transactions, type) {
    const data = transactions.filter((t) => t.type === type);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const categories = ["Utilities", "Groceries", "Rent", "Others", "Savings"];

    return months.map((month) => {
      const monthlyData = { month };
      categories.forEach((category) => {
        monthlyData[category] = data
          .filter(
            (t) =>
              new Date(t.date).toLocaleString("default", { month: "long" }) ===
                month && t.category === category
          )
          .reduce((acc, curr) => acc + curr.amount, 0);
      });
      return monthlyData;
    });
  }

  return (
    <DashboardContext.Provider
      value={{
        profile,
        setProfile,
        transactions,
        setTransactions,
        totalIncome,
        totalExpenses,
        remainingAmount,
        expenseData,
        incomeData,
        expenseDataByMonth,
        incomeDataByMonth,
        colors,
        goalAmount,
        consumedAmount,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

DashboardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
