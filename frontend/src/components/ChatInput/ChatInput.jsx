import React from "react";
import { Component } from "react";
import "./ChatInput.scss";


class ChatInput extends Component {
    render() {
        return (
          <div className="ChatInput">
            <input onKeyDown={this.props.send} placeholder='Input Here' />
          </div>
        );
      }
}

export default ChatInput;