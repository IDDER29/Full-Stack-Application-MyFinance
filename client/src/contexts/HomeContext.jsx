import { createContext, useContext, useState } from "react";
import { FaBell, FaShoppingCart, FaBolt, FaHome, FaCar } from "react-icons/fa";

// Create the HomeContext
export const HomeContext = createContext();

// Custom hook for using HomeContext
export function useHomeContext() {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
}

// Icon mapping by category
const ICON_MAP = {
  Utilitaires: <FaBolt size={24} color="white" />,
  Alimentation: <FaShoppingCart size={24} color="white" />,
  Logement: <FaHome size={24} color="white" />,
  Transport: <FaCar size={24} color="white" />,
  Autres: <FaBell size={24} color="white" />,
};

// Background color mapping by category
const BG_COLOR_CLASS_MAP = {
  Utilitaires: "bg-yellow-500",
  Alimentation: "bg-blue-500",
  Logement: "bg-green-500",
  Transport: "bg-red-500",
  Autres: "bg-gray-500",
};

// Sample profile data
const INITIAL_PROFILE = {
  firstName: "Idder",
  lastName: "AIT EL MOUDEN",
  totalIncome: "9000",
  goalAmount: "10000",
};

// Initial transactions data
const INITIAL_TRANSACTIONS = [
  {
    category: "Utilitaires",
    consumption: 339,
    budget: 500,
    dateOfCreation: "01/07/2024",
    lastUpdate: "11/07/2024",
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
    dateOfCreation: "01/07/2024",
    lastUpdate: "10/07/2024",
    title: "Housing Rent",
    image: null,
  },
  {
    category: "Transport",
    consumption: 239,
    budget: 600,
    dateOfCreation: "01/07/2024",
    lastUpdate: "20/07/2024",
    title: "Transportation",
    image: null,
  },
  {
    category: "Utilitaires",
    consumption: 100,
    budget: 500,
    dateOfCreation: "01/07/2024",
    lastUpdate: "01/07/2024",
    title: "Utility Bill",
    image: null,
  },
];

export function HomeProvider({ children }) {
  const [profile] = useState(INITIAL_PROFILE);
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [historicTransactions, setHistoricTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  return (
    <HomeContext.Provider
      value={{
        profile,
        transactions,
        setTransactions,
        currentTransaction,
        setCurrentTransaction,
        iconMap: ICON_MAP,
        bgColorClassMap: BG_COLOR_CLASS_MAP,
        historicTransactions,
        setHistoricTransactions,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
