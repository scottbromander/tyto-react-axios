import React, { Component } from 'react';
import SongListItem from '../SongListItem/SongListItem';

class SongList extends Component {

    render() {
        const htmlArray = this.props.songs.map((item, index) => {
            return (
                <SongListItem key={index} song={item} deleteSong={this.props.deleteSong}/>
            )
        })

        return (
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default SongList;