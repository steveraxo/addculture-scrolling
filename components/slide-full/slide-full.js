import React, { Component } from 'react'
import styles from '../../styles/slideOne.module.css'

export default class SlideOne extends Component {
    componentDidMount(){
        var animData = {
            container: document.getElementById('lottie-full'),
            path: '/animation-assets/new/00_Todos_unidos.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
            name: "animScroll",
        }, animScroll, tl;
          
        var animScroll = bodymovin.loadAnimation(animData)
          
        var customSettings = {}; 

        if(window.innerWidth > 2500){
            customSettings.offset = 1000;
        }else if(window.innerWidth > 1900 & window.innerWidth < 2500){
            customSettings.offset = 500;
        }else{
            customSettings.offset = 350;
        }

        animScroll.addEventListener('DOMLoaded', function () {
            tl = new TimelineMax({repeat: 0})
            tl.to({frame: 0}, 1, {
              frame: animScroll.totalFrames-1,
              onUpdate: function() {
                animScroll.goToAndStop(Math.round(this.target.frame), true)
              },
              Ease:Linear.easeNone
        })
            
        var controller = new ScrollMagic.Controller();
          
        var scene = new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: ".env-full",
            duration: 50000 }).setTween(tl).setPin("#lottie-full").addTo(controller);
        })
    }
    
    render() {
        return (
            <section id={styles.wrapper}>
                <div id="agencies-are-failing">
                    <section className="lottie-env env-full">
                        <div id="lottie-full" className={"lottie__element"}/>
                    </section>
                </div>
            </section>
        )
    }
}
