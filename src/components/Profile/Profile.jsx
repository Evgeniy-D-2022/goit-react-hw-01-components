import PropTypes from "prop-types";
import React from "react";
import { ProfileContainer, Description, ProfileImage, ProfileName, ProfileTag, StatsList, StatsItem, StatsLabel, StatsQuantity } from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileContainer>
  <Description>
    <ProfileImage
      src={avatar}
      alt="User avatar"
    />
    <ProfileName>{username}</ProfileName>
    <ProfileTag>{tag}</ProfileTag>
    <ProfileTag>{location}</ProfileTag>
  </Description>

  <StatsList>
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{stats.followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity>{stats.views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{stats.likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
  </ProfileContainer>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
};