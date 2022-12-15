import PropTypes from 'prop-types';
import css from './StatisticItem.module.css';

export const StatisticItem = ({ label, percentage, color }) => {
  return (
    <li style={{ backgroundColor: color }} className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
