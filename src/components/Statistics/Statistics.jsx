import React from "react";
import data from "../../data/data.json";
import css from "../Statistics/Statistics.module.css";

const Statistics = ({ title }) => {
  const StatisticsItem = () => {
    return data.map((el) => (
      <li className={css.item} key={el.id}>
        <span className={css.label}>{el.label}</span>
        <span className={css.percentage}>{el.percentage}%</span>
      </li>
    ));
  };

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        <StatisticsItem />
      </ul>
    </section>
  );
};

export default Statistics;