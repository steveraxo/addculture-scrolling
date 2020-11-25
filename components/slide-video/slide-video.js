import React, { Component } from 'react'

export default class SlideVideo extends Component {
    componentDidMount(){
        // var frameNumber = 0, // start video at frame 0
        //     // lower numbers = faster playback
        //     playbackConst = 1500, 
        //     // get page height from video duration
        //     setHeight = document.getElementById("set-height"), 
        //     // select video element         
        //     vid = document.getElementById('v0'); 
        //     // var vid = $('#v0')[0]; // jquery option

        // // dynamically set the page height according to video length
        // vid.addEventListener('loadedmetadata', function() {
        // setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
        // });


        // // Use requestAnimationFrame for smooth playback
        // function scrollPlay(){  
        // var frameNumber  = window.pageYOffset/playbackConst;
        // vid.currentTime  = frameNumber;
        // window.requestAnimationFrame(scrollPlay);
        // }

        // window.requestAnimationFrame(scrollPlay);

        document.getElementById("v0").play(); 
    }
    render() {
        return (
            <>
                <div id="set-height"></div>
                <p id="time"></p>
                <video id="v0" autoPlay muted tabIndex="0" autobuffer="autobuffer" preload="preload"><source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="https://rx.raxo.dev/wp-content/uploads/2020/06/RxSite_HOME_Loop2.webm"></source>
                <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="https://rx.raxo.dev/wp-content/uploads/2020/06/RxSite_HOME_Loop2.ogv"></source>
                <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://rx.raxo.dev/wp-content/uploads/2020/06/RxSite_HOME_Loop2.mp4"></source>
                <p>Sorry, your browser does not support the &lt;video&gt; element.</p>
                </video>
            </>
        )
    }
}
