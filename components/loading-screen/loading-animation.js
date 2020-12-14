import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./loading.json";
import animationDataBig from "./loading.json";

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
        animationData: finalFileAnimation ,// the path to the animation json
    });

    animObj.setSpeed(1)

    document.onreadystatechange = function() { 
        if (document.readyState === "complete") { 
          var mediaVideo = document.getElementById("video__element__loader");
          mediaVideo.play();

          document.getElementById("video__element__loader").onended = function() {
            if(window.innerWidth > 1024){
              document.getElementById("add__loading").classList.add("hide__courtain");
    
              setTimeout(function(){
                if(document.getElementById("failing__animation__container__play")){
                  document.getElementById("failing__animation__container__play").click();
                }
              }, 1500)
              
              document.getElementById("animated__logo__player").click();
            }
          }
          // animObj.play();
        }

        // animObj.onComplete = function() {
        //   if(window.innerWidth > 1024){
        //     document.getElementById("add__loading").classList.add("hide__courtain");
 
        //     setTimeout(function(){
        //       if(document.getElementById("failing__animation__container__play")){
        //         document.getElementById("failing__animation__container__play").click();
        //       }
        //     }, 1500)
            
        //     document.getElementById("animated__logo__player").click();
        //   }
        // }
    }; 

  }
  render() {

    return (
      <>
      <video id="video__element__loader" className="loading__screen__courtain" muted >
          <source src="/video/07_Loader_v1_resized.mp4" type="video/mp4" />
      </video>
      {/* <div className={`lottie__wrapper loading__screen__courtain  ${this.props.customClass}`}>
        <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
      </div> */}
      </>
    );
  }
}

export default ControlledLottie71;