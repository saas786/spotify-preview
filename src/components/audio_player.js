import React, {Component} from 'react';
import Axios from 'axios';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state= {
            token: props.token,
            audioTrackId: props.audioTrackId,
            previewTrack: ''
        };

        this.baseUrl = "https://cs-554-spotify-proxy.herokuapp.com";
        this.audioTrackId = props.audioTrackId;
        this.token = props.token;
    }


    getTrackData = async (id) => {
        let url = `${this.baseUrl}/v1/tracks/${id}`;
        let trackData = Axios.get(url, {
            headers: {
                Authorization: "Bearer " + this.token.access_token
            }
        })
        
        return trackData;
    };

    componentWillMount = async () => {
        if (this.props.audioTrackId) {
            console.log("id ", this.props.audioTrackId);
            this.setState({audioTrackId: this.props.audioTrackId});
        }

        let trackData = await this.getTrackData(this.state.audioTrackId);
        this.setState({previewTrack: trackData.data.preview_url}); 
    };

    loadAudioPlayerControl = () => {
        if(this.state.previewTrack) {
            return (
                <div id="audio-player-wrap">
                    <audio id="audioPlayer" controls>
                        <source src={this.state.previewTrack} type="audio/mpeg" />
                        Your browser does not support HTML5 Audio!
                    </audio>
                </div>
            )
        } else {
            return <div>Track Loading...</div>
        }
    }

    render() {
        return this.loadAudioPlayerControl();
    }
};

export default AudioPlayer;