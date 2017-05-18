import React from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class FaderUp extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.faderUp()
  }

  render() {
    const { id, position } = this.props;
    return (
      <Entity
        className="selectable"
        id={id}
        src={'redPlusSign.png'}
        primitive="a-plane"
        material={{
          opacity: 0.70,
        }}
        position={position}
        width="0.50"
        height="0.50"
        events={{
          click: this.onClick
        }}
      >
      </Entity>
    )
  }
}


export default FaderUp;
