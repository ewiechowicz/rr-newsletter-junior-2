import React from 'react';
import Button from './Button';

export default class ThreeButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valueOne: 0,
      valueTwo: 0,
      valueThree: 0,
    }
  }

  changeOne = () => {
    this.setState({
      valueOne: this.state.valueOne + 3
    })
  }

  changeTwo = () => {
    this.setState({
      valueTwo: this.state.valueTwo - 7
    })
  }

  changeThree = () => {
    this.setState({
      valueThree: this.state.valueOne + this.state.valueTwo
    })
  }

  render() {
    return (
      <div>
        Here are my 3 buttons.<br />
        <b>Your task is to render the buttons here</b>.<br />
        <Button number={"1"} value={this.state.valueOne} change={this.changeOne}/><br />
        <Button number={"2"} value={this.state.valueTwo} change={this.changeTwo}/><br />
        <Button number={"3"} value={this.state.valueThree} change={this.changeThree}/><br />
      </div>
    );
  }
};
