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
    if(window.innerWidth < 1024){
      SetIsMobile(true);
    }

    window.onbeforeunload = function () {
      if(window.scrollTo) window.scrollTo(0,0);
    };

    if (navigator.appVersion.indexOf("Win") != -1){
      document.getElementById("fp-nav").classList.add("windows__os")
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
      <script
          dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'G-VE21KYC672');
              `,
          }}
      />
      <script
          dangerouslySetInnerHTML={{
              __html: `
              var _ss = _ss || [];
              _ss.push(['_setDomain', 'https://koi-3QNMLPDA8K.marketingautomation.services/net']);
              _ss.push(['_setAccount', 'KOI-4CBA46MU6G']);
              _ss.push(['_trackPageView']);
              (function() {
              var ss = document.createElement('script');
              ss.type = 'text/javascript'; ss.async = true;
              ss.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'koi-3QNMLPDA8K.marketingautomation.services/client/ss.js?ver=2.4.0';
              var scr = document.getElementsByTagName('script')[0];
              scr.parentNode.insertBefore(ss, scr);
              })();
    
              var callThisOnReturn = function(resp) {
              if (resp) {
                var SharpSpringTracking = resp.trackingID;
              }
              };
              _ss.push(['_setResponseCallback', callThisOnReturn]); 
              `,
          }}
      />

      {
        isMobile
        ? ""
        : <LoadingScreen />
      }
      
      <div id="master__wrapper">        
        {
          !isMobile
          ?
          <>
            <DesktopVersionOne />
          </>
          : 
          <MobileVersion />
        }
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.5/lottie.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js" async></script>
      </div>
    </>
  )
}
