import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHeaderItem}>Type</th>
          <th className={css.tableHeaderItem}>Amount</th>
          <th className={css.tableHeaderItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
