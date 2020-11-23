import React, { Component } from 'react'
import styles from '../../styles/slideTwo.module.css'

export default class SlideTwo extends Component {
    componentDidMount(){
        setTimeout(function(){
            var animData = {
                container: document.getElementById('lottie-three'),
                path: '/animation-assets/new/v1_05_Large_Tws.json',
                renderer: 'svg',
                loop: false,
                autoplay: false,
                name: "animScroll",
            }, animScroll, tl;
              
              
            var animScroll = bodymovin.loadAnimation(animData)
              
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
                triggerElement: ".env-three",
                offset: 300,
                duration: 3000 }).setTween(tl).setPin("#lottie-three").addTo(controller);
            })

        }, 2000)
    }
    
    render() {
        return (
            <section id={styles.wrapper}>
                <div id="let-them">
                    <section className="lottie-env env-three">
                        <div id="lottie-three" className={"lottie__element"}/>
                    </section>
                </div>
            </section>
        )
    }
}
