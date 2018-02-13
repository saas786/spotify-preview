import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {query: ''};
    }

    render() {
        return (
            <div className="searc-bar">
                <input type="text" value={this.state.query} />
            </div>
        )
    }
}

export default SearchBar;