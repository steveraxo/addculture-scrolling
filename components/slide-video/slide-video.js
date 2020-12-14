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
                {/* <div className="PlayButton">
                    <img src="https://raxo.dev/addculture/playWhite.png" alt=""/>
                </div>

                <video id="video__element"  onClick={this.playVideo}  poster="https://raxo.dev/addculture/poster.png">
                    <source src="/video/ADDC_Rx_mixed-resized.mp4" type="video/mp4" />
                </video> */}
                <Vimeo
                    video="489563794"
                />
            </div>
        )
    }
}
