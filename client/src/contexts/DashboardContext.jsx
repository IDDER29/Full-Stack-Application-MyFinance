import { createContext, useContext, useState, useMemo } from "react";
import { parse } from "date-fns";

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
  // fetch profile data
  const profile = {
    firstName: "Idder",
    lastName: "AIT EL MOUDEN",
    currentTotalIncome: "9000",
    goalAmount: "11000",
    incomeSourses: [
      { source: "Salary", amount: 3000 },
      { source: "Freelance", amount: 1500 },
      { source: "Investments", amount: 700 },
      { source: "Other", amount: 300 },
    ],
  };
  ////////////////////
  // fetch transactions data
  const [transactions, setTransactions] = useState([
    {
      category: "Utilitaires",
      consumption: 339,
      budget: 500,
      dateOfCreation: "01/06/2024",
      lastUpdate: "11/06/2024",
      title: "Utility Bill",
      image: null,
    },
    {
      category: "Logement",
      consumption: 500,
      budget: 900,
      dateOfCreation: "01/07/2024",
      lastUpdate: "10/07/2024",
      title: "Housing Rent",
      image: null,
    },
    {
      category: "Alimentation",
      consumption: 50,
      budget: 700,
      dateOfCreation: "01/07/2024",
      lastUpdate: "15/07/2024",
      title: "Groceries",
      image: null,
    },
    {
      category: "Logement",
      consumption: 1000,
      budget: 900,
      dateOfCreation: "01/08/2024",
      lastUpdate: "10/08/2024",
      title: "Housing Rent",
      image: null,
    },
    {
      category: "Transport",
      consumption: 239,
      budget: 600,
      dateOfCreation: "01/08/2024",
      lastUpdate: "20/08/2024",
      title: "Transportation",
      image: null,
    },
    {
      category: "Utilitaires",
      consumption: 100,
      budget: 500,
      dateOfCreation: "01/09/2024",
      lastUpdate: "01/09/2024",
      title: "Utility Bill",
      image: null,
    },
    {
      category: "Alimentation",
      consumption: 150,
      budget: 700,
      dateOfCreation: "01/10/2024",
      lastUpdate: "15/10/2024",
      title: "Groceries",
      image: null,
    },
    {
      category: "Logement",
      consumption: 1200,
      budget: 900,
      dateOfCreation: "01/11/2024",
      lastUpdate: "10/11/2024",
      title: "Housing Rent",
      image: null,
    },
    {
      category: "Transport",
      consumption: 300,
      budget: 600,
      dateOfCreation: "01/11/2024",
      lastUpdate: "20/11/2024",
      title: "Transportation",
      image: null,
    },
    {
      category: "Utilitaires",
      consumption: 150,
      budget: 500,
      dateOfCreation: "01/12/2024",
      lastUpdate: "01/12/2024",
      title: "Utility Bill",
      image: null,
    },
  ]);

  ///////////////////////////////

  const goalIncome = profile.goalAmount; // Example data
  const totalIncome = profile.currentTotalIncome; // Example data
  const totalCosts = transactions
    .map((transaction) => transaction.consumption)
    .reduce((acc, curr) => acc + curr, 0); // Example calculation

  const remainingAmount = totalIncome - totalCosts; // Example calculation

  // Sample data for the expense chart

  const getExpenseData = (transactions, profile) => {
    // Define colors for categories
    const colors = {
      Utilitaires: "bg-red-500",
      Alimentation: "bg-blue-500",
      Logement: "bg-green-500",
      Transport: "bg-yellow-500",
      Autres: "bg-gray-500",
      Economiser: "bg-purple-500",
    };

    // Aggregate consumption amounts by category
    const aggregatedData = transactions.reduce(
      (acc, { category, consumption }) => {
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category] += consumption;
        return acc;
      },
      {}
    );

    // Calculate the "Economiser" amount
    const totalConsumption = Object.values(aggregatedData).reduce(
      (sum, amount) => sum + amount,
      0
    );
    const savingsAmount = Number(profile.goalAmount) - totalConsumption;

    // Create expense data array with categories and amounts
    const expenseData = Object.keys(aggregatedData).map((category) => ({
      category,
      amount: aggregatedData[category],
      color: colors[category] || colors["Autres"],
    }));

    // Add "Economiser" category if goalAmount is set
    if (savingsAmount > 0) {
      expenseData.push({
        category: "Economiser",
        amount: savingsAmount,
        color: colors["Economiser"],
      });
    }

    // Add "Autres" category for any other income sources not listed
    const incomeSources = profile.incomeSourses.map((source) => source.source);
    const allCategories = Object.keys(colors);
    const missingCategories = allCategories.filter(
      (cat) => !Object.keys(aggregatedData).includes(cat)
    );

    missingCategories.forEach((cat) => {
      if (cat !== "Economiser") {
        expenseData.push({
          category: cat,
          amount: 0,
          color: colors[cat],
        });
      }
    });

    return expenseData;
  };

  const expenseData = getExpenseData(transactions, profile);

  /// Sample data for the income chart

  const totalAmount = expenseData.reduce((acc, curr) => acc + curr.amount, 0);
  const goalAmount = 5000;

  // expenseData by monts

  const transformData = (transactions) => {
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

    const expenseData = {};

    transactions.forEach((transaction) => {
      const parsedDate = parse(
        transaction.dateOfCreation,
        "dd/MM/yyyy",
        new Date()
      );
      const monthIndex = parsedDate.getMonth();
      const monthName = months[monthIndex];

      if (!expenseData[monthName]) {
        expenseData[monthName] = {
          month: monthName,
          Utilitaires: 0,
          Alimentation: 0,
          Logement: 0,
          Transport: 0,
          Autres: 0,
          Economiser: 0,
        };
      }

      if (transaction.category in expenseData[monthName]) {
        expenseData[monthName][transaction.category] += transaction.consumption;
      } else {
        expenseData[monthName].Autres += transaction.consumption;
      }
    });

    return Object.values(expenseData);
  };

  const expenseDatabyMonth = transformData(transactions);

  // Sample data for the income chart
  const soursesOfIncome = profile.incomeSourses;

  // Sample data for the earnings and costs chart
  const chartData = [
    { month: "January", earnings: 4000, costs: 2400 },
    { month: "February", earnings: 3000, costs: 1398 },
    { month: "March", earnings: 2000, costs: 9800 },
    { month: "April", earnings: 2780, costs: 3908 },
    { month: "May", earnings: 1890, costs: 4800 },
    { month: "June", earnings: 2390, costs: 3800 },
  ];

  let colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <DashboardContext.Provider
      value={{
        goalIncome,
        costs: totalCosts,
        income: totalIncome,
        remaining: remainingAmount,
        expenseData,
        totalAmount,
        goalAmount,
        totalCosts,
        expenseDatabyMonth,
        soursesOfIncome,
        chartData,
        colors,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
