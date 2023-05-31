import PropTypes from "prop-types";
import React from "react";
import {  } from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
       
       <li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
      
    )
}

FriendListItem.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    ),
};