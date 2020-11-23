import React, { Component } from 'react'
import styles from '../../styles/slideOne.module.css'

export default class SlideOne extends Component {
    componentDidMount(){
        setTimeout(function(){
            var animData = {
                container: document.getElementById('lottie-full'),
                path: '/animation-assets/new/00_Todos unidos.json',
                renderer: 'svg',
                loop: false,
                autoplay: false,
                name: "animScroll",
            }, animScroll, tl;
              
              
            var animScroll = bodymovin.loadAnimation(animData)
              
            var customSettings = {}; 

            if(window.innerWidth > 1900){
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
                triggerElement: ".env-full",
                offset: customSettings.offset,
                duration: 3000 }).setTween(tl).setPin("#lottie-full").addTo(controller);
            })

        }, 10)
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
