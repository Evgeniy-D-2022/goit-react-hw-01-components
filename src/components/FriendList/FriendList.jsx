import PropTypes from "prop-types";
import React from "react";
import {  } from './FriendList.styled';
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
       
      </ul>
    )
}

FriendList.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    ),
};