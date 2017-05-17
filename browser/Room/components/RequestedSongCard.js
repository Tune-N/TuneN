import React from 'react';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import AddCircle from 'material-ui/svg-icons/content/add-circle';

const RequestedSongCard = (props) => {
  const { name, votes } = props;

  return (
      <ListItem
        leftAvatar={<Avatar src={'https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg'} />}
        primaryText={`${name}`}
        secondaryText={`${votes} Votes`}
        rightIcon={ <AddCircle color="#CC181E" />}
      >
      </ListItem>
  )
};

export default RequestedSongCard;
