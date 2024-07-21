import React, { useState } from "react";
import TransactionItem from "./TransactionItemH";
import EditTransactionModal from "./EditTransactionModal";
import DeleteTransactionModal from "./DeleteTransactionModal";
//import { initialTransactions } from "./data";
import "../../assets/styles/menu-container.css";
import { useHomeContext } from "../../contexts/HomeContext";

const TransitionHistorique = () => {
  const {
    transactions,
    setTransactions,
    historicTransactions,
    setHistoricTransactions,
  } = useHomeContext();
  const { currentTransaction, setCurrentTransaction } = useHomeContext();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleEdit = (transaction) => {
    setCurrentTransaction(transaction);
    setShowEditModal(true);
  };

  const handleDelete = (transaction) => {
    setCurrentTransaction(transaction);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setTransactions(transactions.filter((t) => t !== currentTransaction));
    setShowDeleteModal(false);
  };

  const handleSaveEdit = (editedTransaction) => {
    setTransactions(
      transactions.map((t) =>
        t === currentTransaction ? editedTransaction : t
      )
    );
    setShowEditModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
      <h2 className="text-xl font-bold mb-4">Historique des transitions</h2>
      <div>
        {historicTransactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            transaction={transaction}
            onEdit={handleEdit}
            onDelete={handleDelete}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>

      {showEditModal && (
        <EditTransactionModal
          transaction={currentTransaction}
          onSave={handleSaveEdit}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showDeleteModal && (
        <DeleteTransactionModal
          onConfirm={handleConfirmDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default TransitionHistorique;
