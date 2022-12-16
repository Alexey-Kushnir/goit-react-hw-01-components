import PropTypes from 'prop-types';
import css from './TransactionItem.module.css';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={css.tableBoduItem}>{amount}</td>
      <td className={css.tableBoduItem}>{currency}</td>
      <td className={css.tableBoduItem}>{type}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
