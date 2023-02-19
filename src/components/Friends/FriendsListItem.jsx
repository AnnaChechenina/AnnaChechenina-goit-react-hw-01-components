import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';
// import clsx from 'clsx';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {/* <span
        className={clsx(css.status, (isOnline && css.green).toString())}
      ></span> */}
      <span className={isOnline ? css.online : css.offline}> </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
