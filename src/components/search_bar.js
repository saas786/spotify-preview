import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { query: '' };
    }

    render() {
        return (
            <div className="search-bar input-group-mb">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
                <input type="text" value={this.state.query} aria-describedby="inputGroup-sizing-default" />
            </div>
        )
    }
}

export default SearchBar;