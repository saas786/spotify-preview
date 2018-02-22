import React, { Component } from 'react';
import Axios from 'axios';


class SearchBar extends Component {
    baseUrl() {
        return "https://cs-554-spotify-proxy.herokuapp.com";
    }

    constructor(props) {
        super(props);

        this.state = { 
            query: 'jazz',
            matchingTracks: []
        };
    }

    async getPermission() {
        let authUrl = `${this.baseUrl()}/api/token`;
        const id = "5c81ebb84b61439ba96b4ea1f07502bd";
        const secret = "2a2e332a64c0492898e69396221ed73a";
        let key = id + ":" + secret;
        key = btoa(key);
        const authToken = await Axios.post(authUrl, {}, {
            headers: { Authorization : "Basic " + key}
        });

        return authToken.data;
    }

    async getTracks(query, authToken) {
        let url = `${this.baseUrl()}/v1/search?q=${this.state.query}&type=track`;
        const response = await Axios.get(url, {
            headers : {
                Authorization: "Bearer " + authToken.access_token
            }
        });
        
        return response;
    }

    componentDidMount = async newProps => {
        const authToken = await this.getPermission();
        const tracks = await this.getTracks("", authToken);
        
        this.props.updateTracks(tracks.data.tracks.items);
    };

    render() {
        return (
            <div className="search-bar input-group-mb">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
                <input type="text" aria-describedby="inputGroup-sizing-default" />
            </div>
        )
    }
}

export default SearchBar;