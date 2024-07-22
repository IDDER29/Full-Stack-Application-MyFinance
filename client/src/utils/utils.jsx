import { parseISO } from "date-fns";
import { FaBell, FaShoppingCart, FaBolt, FaHome, FaCar } from "react-icons/fa";

// Function to calculate total costs for the given month and year
export const calculateTotalCosts = (transactions, month, year) => {
  const currentMonthTransactions = transactions
    .flatMap((transaction) =>
      transaction.transactions
        ? transaction.transactions
        : transaction.transactionsHistorique
    )
    .filter(({ date }) => {
      const transactionDate = parseISO(date);
      return (
        transactionDate.getMonth() + 1 === month &&
        transactionDate.getFullYear() === year
      );
    });

  return currentMonthTransactions.reduce((acc, { amount }) => acc + amount, 0);
};

export const getExpenseData = (transactions, profile) => {
  const colors = {
    Utilitaires: "bg-red-500",
    Alimentation: "bg-blue-500",
    Logement: "bg-green-500",
    Transport: "bg-yellow-500",
    Autres: "bg-gray-500",
    Economiser: "bg-purple-500",
  };

  const aggregatedData = transactions.reduce(
    (acc, { category, consumption }) => {
      acc[category] = (acc[category] || 0) + consumption;
      return acc;
    },
    {}
  );

  const totalConsumption = Object.values(aggregatedData).reduce(
    (sum, amount) => sum + amount,
    0
  );
  const savingsAmount = profile.goalAmount - totalConsumption;

  const expenseData = Object.keys(aggregatedData).map((category) => ({
    category,
    amount: aggregatedData[category],
    color: colors[category] || colors.Autres,
  }));

  if (savingsAmount > 0) {
    expenseData.push({
      category: "Economiser",
      amount: savingsAmount,
      color: colors.Economiser,
    });
  }

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

export const transformDataByCategory = (transactions) => {
  const categories = [
    "Utilitaires",
    "Alimentation",
    "Logement",
    "Transport",
    "Autres",
    "Economiser",
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based, so add 1
  const currentYear = currentDate.getFullYear();

  const expenseData = transactions.reduce((acc, transaction) => {
    const category = categories.includes(transaction.category)
      ? transaction.category
      : "Autres";
    const transactionsList =
      transaction.transactions || transaction.transactionsHistorique;

    transactionsList.forEach(({ amount, date }) => {
      const transactionDate = parseISO(date);
      if (
        transactionDate.getMonth() + 1 === currentMonth &&
        transactionDate.getFullYear() === currentYear
      ) {
        if (!acc[category]) {
          acc[category] = {
            category,
            amount: 0,
          };
        }
        acc[category].amount += amount;
      }
    });

    return acc;
  }, {});

  return Object.values(expenseData);
};

export const generateChartData = (transactions, profile) => {
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

  const earningsByMonth = profile.incomeSources.reduce((acc, { amount }) => {
    months.forEach((month) => {
      acc[month] = (acc[month] || 0) + amount;
    });
    return acc;
  }, {});

  const costsByMonth = transactions.reduce((acc, transaction) => {
    const transactionsList =
      transaction.transactions || transaction.transactionsHistorique;

    transactionsList.forEach(({ amount, date }) => {
      const parsedDate = parseISO(date);
      const monthName = months[parsedDate.getMonth()];

      acc[monthName] = (acc[monthName] || 0) + amount;
    });

    return acc;
  }, {});

  return months.map((month) => ({
    month,
    earnings: earningsByMonth[month] || 0,
    costs: costsByMonth[month] || 0,
  }));
};

export const iconMap = {
  Utilitaires: <FaBolt size={24} color="white" />,
  Alimentation: <FaShoppingCart size={24} color="white" />,
  Logement: <FaHome size={24} color="white" />,
  Transport: <FaCar size={24} color="white" />,
  Autres: <FaBell size={24} color="white" />,
};

export const bgColorClassMap = {
  Utilitaires: "bg-yellow-500",
  Alimentation: "bg-blue-500",
  Logement: "bg-green-500",
  Transport: "bg-red-500",
  Autres: "bg-gray-500",
};
