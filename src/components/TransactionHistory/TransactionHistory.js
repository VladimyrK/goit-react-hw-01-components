import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'
import Transaction from '../Transaction/Transaction'

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

export default TransactionHistory
