import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import TrackList from './components/track_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            tracks: []
        };
    }

    updateTracks = (query, tracks) => {
        this.setState({
            query: query,
            tracks: tracks
        });
    }

    render() {
        return (
            <div className="App">
                <h1 className="page-header">Spotify Quick Lookup</h1>
                <SearchBar updateTracks={this.updateTracks} />
                <TrackList query={this.state.query} tracks={this.state.tracks} />
            </div>
        );
    }
}

export default App;
