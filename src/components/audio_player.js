import React from 'react';

const AudioPlayer = (props) => {
    const audioTrack = props.audioTrack;

    return (
        <div id="audio-player-wrap">
            <audio id="audioPlayer" controls>
                <source src={audioTrack} type="audio/mpeg" />
                Your browser does not support HTML5 Audio!
            </audio>
        </div>
    )
};

export default AudioPlayer;