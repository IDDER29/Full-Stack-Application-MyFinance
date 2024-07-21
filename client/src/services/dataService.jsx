export const fetchProfileData = () => ({
  username: "John Doe",
  currentTotalIncome: 9000,
  goalAmount: 11000,
  incomeSourses: [
    { source: "Salary", amount: 3000 },
    { source: "Freelance", amount: 5000 },
    { source: "Investments", amount: 700 },
    { source: "Other", amount: 300 },
  ],
});

export const fetchTransactionsData = () => [
  {
    title: "Utility Bill",
    category: "Utilitaires",
    dateOfCreation: "01/06/2024",
    lastUpdate: "11/06/2024",
    budget: 500,
    image: null,
    transactionsHistorique: [
      {
        amount: 100,
        date: "01/06/2024",
        description: "Electricity",
      },
      {
        amount: 200,
        date: "11/06/2024",
        description: "Water",
      },
    ],
  },
  {
    title: "Housing Rent",
    category: "Logement",
    dateOfCreation: "01/07/2024",
    lastUpdate: "10/07/2024",
    budget: 900,
    image: null,
    transactionsHistorique: [
      {
        amount: 500,
        date: "01/07/2024",
        description: "Rent Payment",
      },
      {
        amount: 500,
        date: "01/07/2024",
        description: "Rent Payment",
      },
    ],
  },
  {
    title: "Groceries",
    category: "Alimentation",
    dateOfCreation: "01/07/2024",
    lastUpdate: "15/07/2024",
    budget: 700,
    image: null,
    transactionsHistorique: [
      {
        amount: 50,
        date: "01/07/2024",
        description: "Grocery Shopping",
      },
    ],
  },
  {
    title: "Housing Rent",
    category: "Logement",
    dateOfCreation: "01/08/2024",
    lastUpdate: "10/08/2024",
    budget: 900,
    image: null,
    transactionsHistorique: [
      {
        amount: 1000,
        date: "01/08/2024",
        description: "Rent Payment",
      },
    ],
  },
  {
    title: "Transportation",
    category: "Transport",
    dateOfCreation: "01/08/2024",
    lastUpdate: "20/08/2024",
    budget: 600,
    image: null,
    transactionsHistorique: [
      {
        amount: 239,
        date: "01/08/2024",
        description: "Monthly Pass",
      },
    ],
  },
  {
    title: "Utility Bill",
    category: "Utilitaires",
    dateOfCreation: "01/09/2024",
    lastUpdate: "01/09/2024",
    budget: 500,
    image: null,
    transactionsHistorique: [
      {
        amount: 100,
        date: "01/09/2024",
        description: "Electricity",
      },
    ],
  },
  {
    title: "Groceries",
    category: "Alimentation",
    dateOfCreation: "01/10/2024",
    lastUpdate: "15/10/2024",
    budget: 700,
    image: null,
    transactionsHistorique: [
      {
        amount: 150,
        date: "01/10/2024",
        description: "Grocery Shopping",
      },
    ],
  },
  {
    title: "Housing Rent",
    category: "Logement",
    dateOfCreation: "01/11/2024",
    lastUpdate: "10/11/2024",
    budget: 900,
    image: null,
    transactionsHistorique: [
      {
        amount: 1200,
        date: "01/11/2024",
        description: "Rent Payment",
      },
    ],
  },
  {
    title: "Transportation",
    category: "Transport",
    dateOfCreation: "01/11/2024",
    lastUpdate: "20/11/2024",
    budget: 600,
    image: null,
    transactionsHistorique: [
      {
        amount: 300,
        date: "01/11/2024",
        description: "Monthly Pass",
      },
    ],
  },
  {
    title: "Utility Bill",
    category: "Utilitaires",
    dateOfCreation: "01/12/2024",
    lastUpdate: "01/12/2024",
    budget: 500,
    image: null,
    transactionsHistorique: [
      {
        amount: 150,
        date: "01/12/2024",
        description: "Electricity",
      },
    ],
  },
];
