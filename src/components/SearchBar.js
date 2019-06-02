import React from 'react';
import './SearchBar.css'
import MaterialButton from "./MaterialButton";

class SearchBar extends React.Component {
  render() {
    return (
        <div className="search-wrapper">
          <input type="text"
                 name="search"
                 placeholder="Find"
                 className="search-edit"
                 value={this.props.value}
                 onChange={this.props.onChange}
                 onKeyUp={this.props.onKeyUp}
          />
          <MaterialButton
              title='FIND'
              onClick={this.props.onClick}
          />
        </div>
    )
  }
}

export default SearchBar;