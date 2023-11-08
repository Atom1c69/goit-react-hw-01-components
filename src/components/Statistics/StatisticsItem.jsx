import data from "../../data/data.json";
import css from "../statistics/statistics.module.css"

const StatisticsItem  = () => {
return data.map((el)=> (
    <li className={css.item} key={el.id}>
      <span className={css.label}>{el.label}</span>
      <span className={css.percentage}>{el.percentage}%</span>
    </li>))
}
    
export default Statistics;