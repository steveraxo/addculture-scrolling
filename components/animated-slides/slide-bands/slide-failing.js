import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./animation-assets/06_Are_Failing_with_Time Remap.json";
import animationDataBig from "./animation-assets/06_Are_Failing_with_Time Remap.json";

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

    document.getElementById("failing__animation__container__play").addEventListener("click", function(){
      animObj.play();
    })
    
    animObj.onComplete = function() {
      document.getElementById("failing__animation__scroller__fallback").click();
    }
  }

  render() {
    return (
      <div className={`lottie__wrapper  ${this.props.customClass} failing__animation active`}>
        <div id="failing__animation__container"></div>
        <div id="failing__animation__container__play"></div>
        <div id="failing__animation__scroller"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;