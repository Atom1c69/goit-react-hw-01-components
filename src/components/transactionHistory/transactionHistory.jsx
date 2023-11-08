import transactions from "../../data/transactions.json";
import css from "../TransactionHistory/TransactionHistory.module.css"

export const TransactionHistory = () => (<table className={css.transaction_history}>
<thead>
  <tr>
    <th>Type</th>
    <th>Amount</th>
    <th>Currency</th>
  </tr>
</thead>
<tbody>
<TransactionHistoryItem/>
</tbody>
</table>);