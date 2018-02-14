import React, {Component} from 'react';
import TrackListItem from './track_list_item';

class TrackList extends Component {
    render() {
        return (
            <div className="track-list">
                <ul className="unstyled-list">
                    <TrackListItem />
                </ul>
            </div>
        )
    }
}

export default TrackList;