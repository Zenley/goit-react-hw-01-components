import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

export const FriendsList = ({friends}) => {
return (
    <div className={styles.container}>
        <ul className={styles.friendslist}>
            {friends.map(({id, name, avatar, isOnline}) => (
               <FriendsListItem
               key = {id}
                name = {name}
                avatar = {avatar}
                isOnline = {isOnline}
                />
            )
            )}
        </ul>
    </div>
)
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
       PropTypes.shape({id: PropTypes.number.isRequired}).isRequired
    ).isRequired,
};