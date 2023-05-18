import PropTypes from 'prop-types';

import userProfile from './user.json';

const { username, tag, location, avatar, stats } = userProfile;

const { followers, views, likes } = stats;

export const Profile = (
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes
) => {
};
