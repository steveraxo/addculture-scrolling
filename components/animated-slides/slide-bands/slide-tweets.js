import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./animation-assets/v1_Twts_with_data.json";
import animationDataBig from "./animation-assets/v1_Twts_with_data.json";

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
    animObj.setSpeed(0.1)

    document.getElementById("slide__tweets").addEventListener("click", function(){
      animObj.play();
    })

    animObj.onComplete = function() {
      document.getElementById("triggerScrollDown").click();

      setTimeout(function(){
        document.querySelectorAll(".static__section__tweets")[0].classList.add("active");
        document.querySelectorAll(".tweets__container")[0].classList.remove("active");
      }, 2000)
    }
    
  }
  handleStop = () => {
    animObj.stop();
  }
  handlePlay() {
    animObj.play();
  }
  render() {
    return (
      <div className={`lottie__wrapper  ${this.props.customClass} active`}>
        <div id="slide__tweets"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;