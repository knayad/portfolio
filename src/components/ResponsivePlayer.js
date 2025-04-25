import React, { Component } from "react";
import ReactPlayer from "react-player";

class ResponsivePlayer extends Component {
  render() {
    return (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player projectImgs"
          url={this.props.source}
          width="105%"
          height="110%"
        />
      </div>
    );
  }
}

export default ResponsivePlayer;
