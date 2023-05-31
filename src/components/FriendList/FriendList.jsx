import PropTypes from "prop-types";
import React from "react";
import { List } from './FriendList.styled';
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(friend => (
                <FriendListItem
                    avatar = {friend.avatar}
                    name = {friend.name}
                    isOnline = {friend.isOnline}
                    key = {friend.id}
                ></FriendListItem>
            ))}
      </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        })
    )
}
    
