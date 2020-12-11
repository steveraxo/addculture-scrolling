import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./pink_logo.json";
import animationDataBig from "./pink_logo.json";

let animObj = null;

class AnimatedLogoPlayer extends Component {
  state = { shouldPlay: this.props.shouldPlay };
  
  componentDidMount(){
    var finalFileAnimation = false; 

    if(window.screen.width > 3000){
      var finalFileAnimation = animationDataBig;
    }else{
      var finalFileAnimation = animationData;
    }

    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: finalFileAnimation // the path to the animation json
    });

    animObj.stop();
    animObj.setSpeed(0.7)

    document.getElementById("animated__logo__player").addEventListener("click", function(){
      animObj.play();

      setTimeout(function(){
        animObj.pause();
      }, 6000)
    })

  }

  render() {
    return (
      <div className={`lottie__wrapper  ${this.props.customClass}`}>
        <div id="animated__logo__player"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default AnimatedLogoPlayer;