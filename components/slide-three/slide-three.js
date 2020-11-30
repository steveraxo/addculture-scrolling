import React, { Component } from 'react'

export default class SlideThree extends Component {
    componentDidMount(){
        setTimeout(function(){
            var animData = {
                container: document.getElementById('lottie-full'),
                path: '/animation-assets/new/v1_05_Large_Tws.json',
                renderer: 'svg',
                loop: false,
                autoplay: false,
                name: "animScroll",
            }, animScroll, tl;
              
            var animScroll = bodymovin.loadAnimation(animData)
    
            animScroll.addEventListener('DOMLoaded', function () {
                tl = new TimelineMax({repeat: 0})
                tl.to({frame: 0}, 2, {
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
                duration: 15000 }).setTween(tl).setPin("#lottie-full").addTo(controller);
            })

        }, 1000)
    }
    
    render() {
        return (
            <section >
                <div id="are-you-sleeping-on">
                    <section className="lottie-env env-full">
                        <div id="lottie-full" className={"lottie__element"}/>
                    </section>
                </div>
            </section>
        )
    }
}
