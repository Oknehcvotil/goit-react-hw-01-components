import PropTypes from 'prop-types';

import {
  TransactionHistoryContainer,
  TableHead,
  TableItem,
} from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableItem key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableItem>
          );
        })}
      </tbody>
    </TransactionHistoryContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
