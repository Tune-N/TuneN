import React from 'react';
import {Card, CardHeader} from 'material-ui/Card'
import { Link } from 'react-router-dom'
import Badge from 'material-ui/Badge'

const RoomCard = (props) => {
  //#TODO: Add number of listeners
  const { name, listeners } = props;

  return (
    <Card>

      <CardHeader>
        <Link to={`/${name}/live`}>{name}</Link>
        {/*<Badge badgeContent={listeners} primary={true} />*/}
      </CardHeader>
    </Card>
  )
};

export default RoomCard;
