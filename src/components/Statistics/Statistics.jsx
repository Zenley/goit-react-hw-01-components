import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ id, label, percentage }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UPLOAD STATS</h1>
      <ul>
        <li>
          <span className={styles.extension}>{label}</span>
          <span className={styles.percent}>{percentage}</span>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
