import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state= {
            previewTrack: [],
            previewUrl : null
        };

        this.baseUrl = "https://cs-554-spotify-proxy.herokuapp.com";
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
        let trackData = await this.getTrackData(this.props.audioTrackId);
        this.setState(
            {
                previewTrack: trackData.data,
                previewUrl: trackData.data.preview_url
            }
        );
        //console.log("Mouont Id ", this.props.audioTrackId);        
        //console.log("Mount Track : ", this.state.previewTrack.name);        
    };

    componentWillReceiveProps = async newProps => {
        let trackData = await this.getTrackData(newProps.audioTrackId);
        this.setState(
            {
                previewTrack: trackData.data,
                previewUrl: trackData.data.preview_url
            }
        );
        //console.log("RecvProps Track : ", this.state.previewTrack.name);
        
        // hack to re-load audio control
        let element = ReactDOM.findDOMNode(this);
        let audio = element.querySelector('audio');
        if (audio) {
            audio.load();
            audio.play();
        }
    };

    loadAudioPlayerControl = () => {
        if(this.state.previewTrack.length === 0) {
            return <div className="alert alert-warning">Track Loading...</div>
        } else if(this.state.previewTrack && this.state.previewUrl === null) {
            return <div className="alert alert-danger">No preview found!</div>    
        } else if(this.state.previewTrack && this.state.previewUrl) {
            return (
                <div>
                    <p className="lead">Playing {this.state.previewTrack.name}</p>
                    <div className="audio-player-wrap">
                        <audio id="audioPlayer" autoPlay controls>
                            <source src={this.state.previewUrl} type="audio/mpeg" />
                            Your browser does not support HTML5 Audio!
                        </audio>
                    </div>
                </div>
            )
        }
    }

    render() {
        return this.loadAudioPlayerControl();
    }
};

export default AudioPlayer;