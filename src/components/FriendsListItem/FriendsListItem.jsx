import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css'

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return (
        <li className = {styles.items}>
            <span className = {isOnline ? styles.online : styles.offline}></span>
            <img src={avatar} alt="An amazing avatar" className={styles.avatar} />
            <p className={styles.username}>{name}</p>
        </li>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};