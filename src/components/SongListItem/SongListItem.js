import React, { Component } from 'react';

class SongListItem extends Component {

    render() {
        return (
            <div>
                <p>{this.props.song.id} - {this.props.song.artist} - {this.props.song.track}</p>
                <button onClick={() => this.props.deleteSong(this.props.song.id)}>X</button>
            </div>
        )
    }
}

export default SongListItem;