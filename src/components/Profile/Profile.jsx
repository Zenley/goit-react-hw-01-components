import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <img className={styles.profile} src={avatar} alt="user profile pic" />
      <div className={styles.userInfo}>
      <h1 className={styles.name}>{username}</h1>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.engage}>
        <li className = {styles.cardlist}>
          <span className={styles.statsName}>Followers</span>
          <span className={styles.statsNumber}>{followers}</span>
        </li>
        <li className = {styles.cardlist} >
          <span className={styles.statsName}>Views</span>
          <span className={styles.statsNumber}>{views}</span>
        </li>
        <li className = {styles.cardlist}>
          <span className={styles.statsName}>Likes</span>
          <span className={styles.statsNumber}>{likes}</span>
        </li>
      </ul>
    </div>
    </div>
  );
};

Profile.propType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
