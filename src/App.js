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

    displayTrackList = () => {
        return <TrackList query={this.state.query} tracks={this.state.tracks} />;
    }

    displayMessage = () => {
        return (
            <div className="alert alert-info">
                <h4 className="alert-heading">Go ahead! Search for your favorite track.</h4>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <h1 className="page-header">Spotify Quick Lookup</h1>
                <SearchBar updateTracks={this.updateTracks} />
                {this.state.tracks.length > 0 ? this.displayTrackList() : this.displayMessage()}
            </div>
        );
    }
}

export default App;
