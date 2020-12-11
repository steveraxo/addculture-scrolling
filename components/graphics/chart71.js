



import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "../animated-slides/slide-bands/animation-assets/addSevenOne.json";

let animObj = null;

class ControlledLottie71 extends Component {
  state = { shouldPlay: this.props.shouldPlay };
  
  componentDidMount(){
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animationData // the path to the animation json
    });

    animObj.stop();

    document.getElementById("chart__two").addEventListener("click", function(){
      animObj.play();
    })

    document.getElementById("chart__one").addEventListener("click", function(){
      animObj.stop();
    })

  }
  handleStop = () => {
    animObj.stop();
  }
  handlePlay() {
    animObj.play();
  }
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
    };


    return (
      <div className={`lottie__wrapper ${this.props.customClass}`}>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;