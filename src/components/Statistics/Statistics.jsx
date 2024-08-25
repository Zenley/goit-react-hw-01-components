import PropTypes from 'prop-types';
import getRandomHexColor from '../Statistics/RandomColor';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      <div className={styles.continut}>
      {title && <h2 className = {styles.title}>{title}</h2>}
      <ul className = {styles.list}>
        {stats.map(({ id, label, percentage}) => 
        (
          <li
          key={id}
          className={styles.content}
          style = {{
            backgroundColor: getRandomHexColor(),
          }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }).isRequired,
};


