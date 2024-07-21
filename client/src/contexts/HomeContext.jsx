import { createContext, useContext, useState } from "react";
import {
  FaBell,
  FaCaretDown,
  FaShoppingCart,
  FaBolt,
  FaHome,
  FaCar,
} from "react-icons/fa";

export const HomeContext = createContext();

export function useHomeContext() {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHomeContext must be used within a HomeProvider");
  }
  return context;
}

export function HomeProvider({ children }) {
  // global vaaribles

  // Define a mapping between categories and icons
  const iconMap = {
    Utilitaires: <FaBolt size={24} color="white" />,
    Alimentation: <FaShoppingCart size={24} color="white" />,
    Logement: <FaHome size={24} color="white" />,
    Transport: <FaCar size={24} color="white" />,
    no: <FaCar size={24} color="white" />,
  };

  // Define a mapping between categories and colors
  const bgColorClassMap = {
    Utilitaires: "bg-yellow-500",
    Alimentation: "bg-blue-500",
    Logement: "bg-green-500",
    Transport: "bg-red-500",
  };
  //////////////////////////////////////////////////////////

  // Fetch profile data
  // for the card
  const profile = {
    firstName: "Idder",
    lastName: "AIT EL MOUDEN",
    totalIncome: "9000",
    goalAmount: "10000",
  };

  //////////////////////////////
  // Fetch transactions data
  const [transactions, setTransactions] = useState([
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
  ]);

  const [historicTransactions, setHistoricTransactions] = useState([]);

  // for historique transactions
  const [currentTransaction, setCurrentTransaction] = useState(null);
  ////////////////////////////////

  return (
    <HomeContext.Provider
      value={{
        profile,
        transactions,
        setTransactions,
        currentTransaction,
        setCurrentTransaction,
        iconMap,
        bgColorClassMap,
        historicTransactions,
        setHistoricTransactions,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
