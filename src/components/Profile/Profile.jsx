import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { likes, views, followers },
}) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </Container>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
