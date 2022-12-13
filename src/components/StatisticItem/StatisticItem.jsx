import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage, color }) => {
  return (
    <li style={{ backgroundColor: color }} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
