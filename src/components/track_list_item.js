import React from 'react';

const TrackListItem = (props) => {
    const track = props.track;
    const title = track.name;
    return (
        <li className="list-group-item">
            <div className="audio-list media">
                Audio Track: {title}
            </div>
        </li>
    )
};

export default TrackListItem;