import React from "react";
import transactions from "../../data/transactions.json";
import css from "../TransactionHistory/TransactionHistory.module.css"

const TransactionHistory = () => {
  const TransactionHistoryItem = () => {
    return transactions.map(({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    ));
  };

  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <TransactionHistoryItem />
      </tbody>
    </table>
  );
};

export default TransactionHistory;