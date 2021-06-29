import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

class Counter extends Component {
  state = {
    quantity: 1,
  };
  handleDecrement = () => {
    if (this.state.quantity - 1 >= 0) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };
  render() {
    return (
      <div>
        <IconButton onClick={this.handleDecrement} aria-label="decrement">
          <RemoveIcon />
        </IconButton>
        {this.state.quantity}
        <IconButton onClick={this.handleIncrement} aria-label="increment">
          <AddIcon />
        </IconButton>
      </div>
    );
  }
}

export default Counter;
