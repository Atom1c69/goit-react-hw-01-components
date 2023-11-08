import transactions from "../../data/transactions.json";
import css from "../transactionHistory/transactionHistory.module.css"

const TransactionHistoryItem = () => {
    return transactions.map(({id,type,amount,currency})=> (<tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))};