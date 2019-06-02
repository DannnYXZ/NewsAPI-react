import React from 'react';
import './MaterialButton.css'

class MaterialButton extends React.Component {
  render() {
    return (
        <button
            className="search-btn"
            onClick={this.props.onClick}
        >
          {this.props.title}
        </button>
    )
  }
}

export default MaterialButton;