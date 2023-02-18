import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import css from './FriendsList.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
