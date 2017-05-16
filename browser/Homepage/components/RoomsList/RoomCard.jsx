import React from 'react';
import {Card, CardHeader} from 'material-ui/Card'
import {ListItem} from 'material-ui/List'
import { Link } from 'react-router-dom'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import PlayCircle from 'material-ui/svg-icons/av/play-circle-outline'



const RoomCard = (props) => {
  //#TODO: Add number of listeners
  const { name, listeners='255' , avatarSrc='http://www.material-ui.com/images/ok-128.jpg' } = props;

  return (
    <Link to={`/${name}/live`}><ListItem leftAvatar={<Avatar src={avatarSrc} />} primaryText={`${name}`} secondaryText={`${listeners} Listeners`} rightIcon={<PlayCircle/>}>


        {/*<Badge badgeContent={listeners} primary={true} />*/}
    </ListItem></Link>
  )
};

export default RoomCard;