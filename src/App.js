import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import TrackList from './components/track_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trackQuery: "",
            tracks: []
        };
    }
    
    onChange = (state) => {
        this.setState(state);
    }

    updateTracks = (tracks) => {
        this.setState({tracks: tracks});
    }

    render() {
        return (
            <div className="App">
                <h1 className="page-header">Spotify Quick Lookup</h1>
                <SearchBar updateTracks={this.updateTracks} />
                <TrackList tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;
