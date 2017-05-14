import React from 'react';

const HomePage = (props) => {
  return (
    <div className="row">
      <div className="col-md-8 jumbotron" style={{ padding: 5 }}>
        <h3>DJs view rendered for followers</h3>
        <img style={{ width: '100%' }} src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Win3x_Black_Screen_of_Death.gif" />
      </div>
      <div className="col-md-4 jumbotron" style={{ padding: 5 }}>
        <h3>voting songs up and down rendered here</h3>
      </div>
    </div>
  )
};

export default HomePage;
