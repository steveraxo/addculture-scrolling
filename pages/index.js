import React, { useState, useEffect, Suspense } from 'react';
import SlideOne from '../components/slide-one/slide-one'
import SlideTwo from '../components/slide-two/slide-two'
import CTASection from '../components/cta-section/cta-section'
import MobileVersion from "../components/mobile-version/index"

export default function Home() {

  const [isMobile, SetIsMobile] = useState(false)

  function init(){
    new SmoothScroll(document,60,15)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement 
                || document.documentElement 
                || document.body.parentNode 
                || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body 
                && document.documentElement 
                ? document.documentElement 
                : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault(); // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e){
      if(e.detail){
        if(e.wheelDelta)
          return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
        else
          return -e.detail/3 // Firefox
      }else
        return e.wheelDelta/120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }
  
  useEffect(() => {
    if(window.screen.width > 1024){
      init();
    }
    if(window.innerWidth < 1200){
      SetIsMobile(true);
    }
    
  });


  return (
    <div id="master__wrapper">
      {/* Imported files */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.5/lottie.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
      
      {
        !isMobile
        ?
        <>
          <SlideOne />
          <SlideTwo />
          <CTASection />
        </>
        : 
        <MobileVersion />
      }
      
    </div>
  )
}
