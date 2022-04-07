import React from "react";

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor() {
    super();
    this.state = { paragraphShown: false, more: "sdf" };
  }

  onClickHandler() {
    this.setState((curState) => {
      return { paragraphShown: !curState.paragraphShown };
    });
  }

  render() {
    return (
      <React.Fragment>
        <a onClick={this.onClickHandler.bind(this)} href="#">
          Want to buy a new car?
        </a>
        {this.state.paragraphShown && <p>Call +11 22 33 44 now!</p>}
      </React.Fragment>
    );
  }
}

export default Message;
