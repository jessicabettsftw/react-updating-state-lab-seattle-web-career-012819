// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  incrementClicked = () => {
    let newClicked = this.state.timesClicked + 1
    console.log(newClicked);
    this.setState({timesClicked: newClicked})
  }

  render(){
    return (
      <div>
        <button onClick={() => this.incrementClicked()}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}
export default DigitalClicker;
