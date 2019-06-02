import React from 'react';
import './MoreButton.css'

class MoreButton extends React.Component {
  render() {
    return (
        <button
            className="load-more-btn"
            onClick={this.props.onClick}>
          LOAD<br/>MORE
        </button>
    )
  }
}

export default MoreButton;