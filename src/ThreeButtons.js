import React from 'react';

export default class ThreeButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      firstButton: 0,
      secondButton: 0,
      thirdButton: 0
      
    };
  }
  render() {
    return (
      <div>
        Here are my 3 buttons.<br />
        <p>
          <label>{this.state.firstButton}
            <button onClick={this.firstButtonClick.bind(this)}>1 Button</button>
          </label>
        </p>
        <p>
          <label>{this.state.secondButton}
            <button onClick={this.secondButtonClick.bind(this)}>2 Button</button>
          </label>
        </p>
        <p>
          <label>{this.state.thirdButton}
            <button onClick={this.thirdButtonClick.bind(this)}>3 Button</button>
          </label>
        </p>
      </div>
    );
  }
  firstButtonClick() {
    this.setState({
      firstButton: this.state.firstButton + 3
    })
  }
  secondButtonClick() {
    this.setState({
      secondButton: this.state.secondButton - 7
    })
  }
  thirdButtonClick() {
    this.setState({
      thirdButton: this.state.firstButton - this.state.secondButton
    })
  }
};



