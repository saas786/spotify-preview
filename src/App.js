import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import TrackList from './components/track_list';
import AudioPlayer from './components/audio_player';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            tracks: [],
            selectedTrack: null,
            token: ''
        };
    }

    displayTrackList = () => {
        return (
        <TrackList 
            query={this.state.query} 
            tracks={this.state.tracks} 
            onTrackSelect={selectedTrack => this.setState({selectedTrack: selectedTrack})} 
        />
        )
    }

    displayMessage = () => {
        return (
            <div className="alert alert-info">
                <h4 className="alert-heading">Go ahead! Search for your favorite track.</h4>
            </div>
        )
    }

    loadAudioPlayer = () => {
        if(this.state.selectedTrack) {
            return <AudioPlayer token={this.state.token} audioTrackId={this.state.selectedTrack} />;
        }
    }

    render() {
        return (
            <div className="App">
                <h1 className="page-header">Spotify Quick Lookup</h1>
                <SearchBar 
                    token={this.state.token} 
                    updateToken={token => this.setState( {token} )} 
                    updateTracks={(query, tracks) => this.setState({query, tracks})} 
                />
                {this.loadAudioPlayer()}
                {this.state.tracks.length > 0 ? this.displayTrackList() : this.displayMessage()}
            </div>
        );
    }
}

export default App;
