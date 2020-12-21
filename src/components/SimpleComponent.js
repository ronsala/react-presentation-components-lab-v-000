// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    // TODO:
    this.state.mood = "happy" ? ( this.setState({mood: "sad"}) ) : ( this.setState({mood: "happy"}) );
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{ this.state.mood }</h1>
      </div>
    )
  }
}

export default SimpleComponent