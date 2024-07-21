import { parse } from "date-fns";
import { FaBell, FaShoppingCart, FaBolt, FaHome, FaCar } from "react-icons/fa";

export const calculateTotalCosts = (transactions) =>
  transactions.reduce((acc, { consumption }) => acc + consumption, 0);

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

export const transformDataByMonth = (transactions) => {
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

  const expenseData = transactions.reduce((acc, transaction) => {
    const parsedDate = parse(
      transaction.dateOfCreation,
      "dd/MM/yyyy",
      new Date()
    );
    const monthName = months[parsedDate.getMonth()];

    if (!acc[monthName]) {
      acc[monthName] = {
        month: monthName,
        Utilitaires: 0,
        Alimentation: 0,
        Logement: 0,
        Transport: 0,
        Autres: 0,
        Economiser: 0,
      };
    }

    if (transaction.category in acc[monthName]) {
      acc[monthName][transaction.category] += transaction.consumption;
    } else {
      acc[monthName].Autres += transaction.consumption;
    }

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

  const earningsByMonth = profile.incomeSourses.reduce((acc, { amount }) => {
    months.forEach((month) => {
      acc[month] = (acc[month] || 0) + amount;
    });
    return acc;
  }, {});

  const costsByMonth = transactions.reduce(
    (acc, { dateOfCreation, consumption }) => {
      const parsedDate = parse(dateOfCreation, "dd/MM/yyyy", new Date());
      const monthName = months[parsedDate.getMonth()];

      acc[monthName] = (acc[monthName] || 0) + consumption;
      return acc;
    },
    {}
  );

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
