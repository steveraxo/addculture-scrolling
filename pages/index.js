import React, { useState, useEffect, Suspense, lazy } from 'react';
import MobileVersion from "../components/mobile-version/index"
import DesktopVersionOne from "../components/desktop-version/index"
import LoadingScreen from "../components/loading-screen/loading-screen"

export default function Home() {

  const [isMobile, SetIsMobile] = useState(false)

  // START SMOOTH SCROLLING //
  function init() {
    new SmoothScroll(document, 30, 25)
  }
  
  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target =
        document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame =
      target === document.body && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener("mousewheel", scrolled, { passive: false })
    target.addEventListener("DOMMouseScroll", scrolled, { passive: false })

    function scrolled(e) {
      e.preventDefault() // disable default scrolling

      var delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1)
        // Opera
        else return -e.detail / 3 // Firefox
      } else return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true

      var delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5) requestFrame(update)
      else moving = false
    }

    var requestFrame = (function() {
      // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(func) {
          window.setTimeout(func, 1000 / 50)
        }
      )
    })()
  }
  // ENDS SMOOTH SCROLLING //

  useEffect(() => {
    window.onbeforeunload = function () {
      if(window.scrollTo) window.scrollTo(0,0);
    };

    if (navigator.appVersion.indexOf("Win") != -1){
      document.getElementById("fp-nav").classList.add("windows__os")
    }

    if(window.innerWidth < 1200){
      SetIsMobile(true);
    }else{
      // init();
    }
    
    var scrollCounter = 0; 
    document.addEventListener("scroll", function(event){
      scrollCounter++; 

      if(scrollCounter > 20){
        event.preventDefault();

        setTimeout(function(){
          scrollCounter = 0;
        }, 2000)
      }
    })

  });


  return (
    <>
      <scrip async src="https://www.googletagmanager.com/gtag/js?id=G-VE21KYC672"></scrip>
      <script src="/ga.js"></script>
      <script src="/sharpSpringTrack.js"></script>
      {
        !isMobile
        ? <LoadingScreen />
        : ""
      }
      
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
            <DesktopVersionOne />
          </>
          : 
          <MobileVersion />
        }
      </div>
    </>
  )
}
