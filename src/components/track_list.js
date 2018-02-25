import React from 'react';
import TrackListItem from './track_list_item';

const TrackList = (props) => {
    const trackItems = props.tracks.map(track => {
        return (
            <TrackListItem 
            key = {track.id}
            track = {track}
            onTrackSelect={props.onTrackSelect} />
        )
    });
    
    return (
            <div className="track-list">
                <ul className="unstyled-list">
                    {trackItems}
                </ul>
            </div>
        )
}

export default TrackList;