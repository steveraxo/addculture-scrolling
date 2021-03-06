import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./animation-assets/07_1_Let_them_Text_with_Time_Remap.json";
import animationDataBig from "./animation-assets/07_1_Let_them_Text_with_Time_Remap.json";

let animObj = null;

class ControlledLottie71 extends Component {
  state = { shouldPlay: this.props.shouldPlay, animationState: false,  };
  
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

    document.getElementById("let__them__fallback").addEventListener("click", function(){
      animObj.play();
    })

    animObj.onComplete = function() {
      if(!this.state.animationState){
        document.getElementById("triggerScrollDown").click();
      }

      this.setState({animationState: true})

      setTimeout(function(){
        document.querySelectorAll(".let__them__content__container")[0].classList.add("active");
        document.querySelectorAll(".let__them__container")[0].classList.remove("active");
      }.bind(this), 2000)
    }.bind(this);
    
  }

  render() {
    return (
      <div className={`lottie__wrapper  ${this.props.customClass} full__animation let__them__container active`}>
        <div id="let__them"></div>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div>
    );
  }
}

export default ControlledLottie71;