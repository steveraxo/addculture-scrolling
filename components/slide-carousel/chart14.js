import React, { Component } from "react";
import lottie from 'lottie-web';
import animationData from "./chart14.json";

let animObj = null;

class ControlledLottie14 extends Component {
  constructor(props) {
    super(props);

  }

  triggerOnSelected(){
      
    document.querySelectorAll(".slider__ten__next")[0].addEventListener("click", function(){
        
        var currentSlide = document.querySelectorAll(".slick-current")[0].getAttribute("data-index");
        
        if(parseInt(currentSlide) >= 1){
            animObj.play();
        }
    })
    
    document.querySelectorAll(".number__three__one")[0].addEventListener("click", function(){
        
        var currentSlide = document.querySelectorAll(".number__three__one")[0].getAttribute("data-number");
        
        if(parseInt(currentSlide) >= 1){
            animObj.play();
        }
    })

    document.querySelectorAll(".number__three__two")[0].addEventListener("click", function(){
        var currentSlide = document.querySelectorAll(".number__three__two")[0].getAttribute("data-number");
        
        if(parseInt(currentSlide) >= 1){
            animObj.play();
        }
    })
    
    
  }

  componentDidMount(){
        animObj = lottie.loadAnimation({
        container: this.animBox, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData // the path to the animation json
        }); 

        
        animObj.stop();

        this.triggerOnSelected();

        document.getElementById("g101").addEventListener("click", function(){
            animObj.play();
        })
    }

    render() {
        const defaultOptions = {
            loop: false,
            autoplay: false,
            animationData: animationData,
        };

        return (
        <div className={`lottie__wrapper lottieChartFourteen`}>
            <div id="g101"></div>
            <div className="lottie__element" style={{width: "100%", margin: '0 auto'}} ref={ ref => this.animBox = ref}></div>
        </div>
        );
    }
}

export default ControlledLottie14;
