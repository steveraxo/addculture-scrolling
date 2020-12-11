import React, { Component } from 'react'
import Vimeo from '@u-wave/react-vimeo';

export default class SlideVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoIndex: 0,
            volume: 0.2,
            paused: false,
        };

        this.handlePause = this.handlePause.bind(this);
        this.handlePlayerPause = this.handlePlayerPause.bind(this);
        this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }
    
    selectVideo(index) {
        this.setState({ videoIndex: index });
    }
    
    handlePause(event) {
        this.setState({
            paused: event.target.checked,
        });
    }
    
    handlePlayerPause() {
        this.setState({ paused: true });
    }
    
    handlePlayerPlay() {
        if(this.state.paused === false){
            this.setState({ paused: true });
        }else{
            this.setState({ paused: false });
        }
    }
    
    handleVolume(event) {
        this.setState({
            volume: parseFloat(event.target.value),
        });
    }

    playVideo(){
        document.getElementById("video__element").volume = 0.2;
        var mediaVideo = document.getElementById("video__element")
        
        if (mediaVideo.paused) {
            mediaVideo.play();
            document.querySelectorAll(".PlayButton")[0].classList.add("hidden");

        } else {
            mediaVideo.pause();
            document.querySelectorAll(".PlayButton")[0].classList.remove("hidden");

        }

    }

    render() {
        return (
            <div id="video__slide__wrapper">
                <div className="PlayButton" onClick={this.playVideo}>
                    <img src="https://raxo.dev/addculture/playWhite.png" alt=""/>
                </div>

                <video id="video__element" onClick={this.playVideo}>
                    <source src="https://raxo.dev/addculture/ADDC_Rx_mixed-resized.mp4" type="video/mp4" />
                </video>
            </div>
        )
    }
}
