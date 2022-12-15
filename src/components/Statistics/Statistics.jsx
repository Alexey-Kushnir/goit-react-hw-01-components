import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            color={getRandomHexColor()}
          />
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
};
