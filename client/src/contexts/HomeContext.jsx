import { createContext, useContext, useState, useMemo } from "react";
import { FaBell, FaShoppingCart, FaBolt, FaHome, FaCar } from "react-icons/fa";
import {
  fetchProfileData,
  fetchTransactionsData,
} from "../services/dataService";

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

export function HomeProvider({ children }) {
  const profile = useMemo(fetchProfileData, []);
  const [transactions, setTransactions] = useState(fetchTransactionsData());

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
