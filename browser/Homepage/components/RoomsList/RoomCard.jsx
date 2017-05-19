import React from 'react';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import PlayCircle from 'material-ui/svg-icons/av/play-circle-outline';

import store from '../../../store';
import { setCurrentDJ } from '../../../reducers/liveDJs/action-creators'

const RoomCard = (props) => {
  const { name, listeners = '0', image } = props;

  return (
    <Link
      to={`/${name}/live`}
      onClick={(e) =>{
        store.dispatch(setCurrentDJ(name));
      }}
    >
      <ListItem
        leftAvatar={<Avatar src={image || 'http://www.rap-up.com/app/uploads/2016/04/dj-khaled.jpg'} />}
        primaryText={`${name}`}
        secondaryText={`${listeners} Listeners`}
        rightIcon={ <PlayCircle color="#CC181E"/>}
      >
      </ListItem>
    </Link>
  )
};

export default RoomCard;
