import React from 'react';
import {Card, CardHeader} from 'material-ui/Card'
import Badge from 'material-ui/Badge'

const RoomCard = (props) => {

  const { name, listeners } = props;

  return (
    <Card>
      <CardHeader title={name}>
        {/*<Badge badgeContent={listeners} primary={true} />*/}
      </CardHeader>
    </Card>
  )
};

export default RoomCard;
