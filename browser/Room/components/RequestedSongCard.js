import React from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import { voteSongUp } from '../../reducers/djBooth/action-creators';
import store from '../../store';

const RequestedSongCard = (props) => {
  const { id, name, votes, url } = props;
  let text;
  if(votes === 1 ) text = `${votes} Vote`
  else text = `${votes} Votes`

  return (
      <ListItem
        leftAvatar={<Avatar src={url} />}
        primaryText={`${name}`}
        secondaryText={text}
        rightIcon={ <AddCircle color="#CC181E" />}
        onClick={() => store.dispatch(voteSongUp(id))}
      >
      </ListItem>
  );
};

export default RequestedSongCard;
