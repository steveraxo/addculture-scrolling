import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./animation-assets/05_BIPOC__with_Time Remap.json";
import animationDataBig from "./animation-assets/05_BIPOC__with_Time Remap.json";

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
    animObj.setSpeed(0.2)

    document.getElementById("bipoc__data").addEventListener("click", function(){
      animObj.play();
    })
    
    animObj.onComplete = function() {
      document.getElementById("triggerScrollDown").click();
   }
  }

  render() {
    return (
      <div className={`lottie__wrapper  ${this.props.customClass} bipoc__data__container active`}>
        <div id="bipoc__data"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;