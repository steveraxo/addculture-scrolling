import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./animation-assets/v1_data_dos.json";
import animationDataBig from "./animation-assets/v1_data_dos.json";

let animObj = null;

class ControlledLottie71 extends Component {
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
    animObj.setSpeed(0.4)

    document.getElementById("bipocbandsSecond__fallback").addEventListener("click", function(){
      animObj.play();
    })
    
  }
  handleStop = () => {
    animObj.stop();
  }
  handlePlay() {
    animObj.play();
  }
  render() {
    return (
      <div className={`lottie__wrapper bipoc__bands__element  ${this.props.customClass}`}>
        <div id="bipocbandsSecond"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;