import React from 'react';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import PlayCircle from 'material-ui/svg-icons/av/play-circle-outline';

const RoomCard = (props) => {
  const { name, listeners = '255', image } = props;

  return (
    <Link to={`/${name}/live`}>
      <ListItem
        leftAvatar={<Avatar src={image || 'http://www.material-ui.com/images/ok-128.jpg'} />}
        primaryText={`${name}`}
        secondaryText={`${listeners} Listeners`}
        rightIcon={ <PlayCircle color="#CC181E"/>}
      >
      </ListItem>
    </Link>
  )
};

export default RoomCard;