import PropTypes from 'prop-types';
import styles from '../Transactions/Transactions.module.css';

export const TransactionHistory = ({ items }) => {
return (
    <div className = {styles.container}>
        <table className ={styles.transactions}>
          
            <thead className={styles.antet}>
               <tr className={styles.title}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr> 
            </thead>
            
            <tbody className={styles.tableBody}>
{items.map(({id, type, amount, currency}) => (
    <tr key={id} className={styles.content}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
))}
            </tbody>
        </table>
    </div>
);
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};