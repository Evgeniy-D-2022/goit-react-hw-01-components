import PropTypes from "prop-types";
import React from "react";
import { Item, Span, Image, Name } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
       
       <Item>
  <Span status={isOnline}></Span>
  <Image src={avatar} alt="User avatar" width="48" />
  <Name>{name}</Name>
</Item>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
};