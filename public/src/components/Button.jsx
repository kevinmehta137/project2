import React from "react";

class Button extends React.Component {
    // a bunch of stuff to handle props

  render() {
    return (
      <a 
        href={this.props.linkUrl}
        style="background-color: ${this.props.buttonColor}"
      >
        {this.props.buttonText}
      </a>
    );
  }
}

export default Button;
