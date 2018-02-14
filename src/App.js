import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import TrackList from './components/track_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="page-header">Spotify Quick Lookup</h1>
        <SearchBar />
        <TrackList />
      </div>
    );
  }
}

export default App;
