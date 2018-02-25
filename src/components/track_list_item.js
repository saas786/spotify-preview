import React from 'react';

const TrackListItem = (props) => {
    const track = props.track;
    const title = track.name;
    const album = track.album;
    const thumbnail = album.images[2].url;
    const artist = track.artists[0];
    const artistUrl = artist.external_urls.spotify;
    const artistName = artist.name; // can reduce as a comma separated list
    const popularity = track.popularity;
    const albumName = album.name;
    const albumUrl = album.external_urls.spotify;
    const trackUrl = track.href;
    //const onTrackSelect = props.onTrackSelect;

    return (
        <li className="list-group-item" onClick={() => props.onTrackSelect(trackUrl)}>
            <div className="audio-list media">
            <img className="pull-left" src={thumbnail} alt="Album Cover" />
                <div className="media-body">
                    <h4 className="media-heading">{title} by {" "}
                        <a href={artistUrl}>{artistName}</a>
                    </h4>
                    <div>
                        <a href={albumUrl}>Album: {albumName} </a>
                        <span className="pull-right">Popularity: {popularity}</span>
                    </div>
                </div>
            </div>
        </li>
    )
};

export default TrackListItem;