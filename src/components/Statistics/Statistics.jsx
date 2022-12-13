import { StatisticItem } from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats && stats.map(stat => <StatisticItem key={stat.id} {...stat} />)}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
