import { createContext, useContext, useState, useEffect, useMemo } from "react";
import {
  fetchProfileData,
  fetchTransactionsData,
} from "../services/dataService";
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

// Icon and background color mapping by category
const ICON_MAP = {
  Utilitaires: <FaBolt size={24} color="white" />,
  Alimentation: <FaShoppingCart size={24} color="white" />,
  Logement: <FaHome size={24} color="white" />,
  Transport: <FaCar size={24} color="white" />,
  Autres: <FaBell size={24} color="white" />,
};

const BG_COLOR_CLASS_MAP = {
  Utilitaires: "bg-yellow-500",
  Alimentation: "bg-blue-500",
  Logement: "bg-green-500",
  Transport: "bg-red-500",
  Autres: "bg-gray-500",
};

// Helper function to parse dates
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

// Current date utilities
const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

export function HomeProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("HomeProvider rendered");
  useEffect(() => {
    console.log("HomeProvider useEffect triggered");
    const loadData = async () => {
      try {
        const profileData = await fetchProfileData();
        const transactionsData = await fetchTransactionsData();
        console.log("Profile data fetched:", profileData);
        console.log("Transactions data fetched:", transactionsData);
        setProfile(profileData);
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const currentMonthTransactions = useMemo(() => {
    return transactions.filter(({ dateOfCreation: date }) => {
      const transactionDate = parseDate(date);
      return (
        transactionDate.getMonth() + 1 === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    });
  }, [transactions]);

  const [historicTransactions, setHistoricTransactions] = useState([]);
  const [currentTransaction, setCurrentTransaction] = useState(null);

  return (
    <HomeContext.Provider
      value={{
        profile,
        transactions: currentMonthTransactions,
        setTransactions,
        currentTransaction,
        setCurrentTransaction,
        iconMap: ICON_MAP,
        bgColorClassMap: BG_COLOR_CLASS_MAP,
        historicTransactions,
        setHistoricTransactions,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
