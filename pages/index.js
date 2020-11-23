import React, { useState, useEffect, Suspense, lazy } from 'react';
import LoadingScreen from '../components/loading-screen/loading-screen'
import SlideOne from '../components/slide-one/slide-one'
import SlideTwo from '../components/slide-two/slide-two'
import SlideThree from '../components/slide-three/slide-three'
import CTASection from '../components/cta-section/cta-section'
import MobileVersion from "../components/mobile-version/index"

export default function Home() {

  const [isMobile, SetIsMobile] = useState(false)

  function init(){
    new SmoothScroll(document,20,20)
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
    <>
      <script>
        {`
            var _ss = _ss || [];
            _ss.push(['_setDomain', 'https://koi-3QNMLPDA8K.marketingautomation.services/net']);
            _ss.push(['_setAccount', 'KOI-49PC6D4KZS']);
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
        `
        }
      </script>

      <LoadingScreen />

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
            <div className="scroll__indicator">
              <svg width="15" height="94" viewBox="0 0 15 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.92 33.144L4.92 31.704C4.29067 31.7253 3.752 31.848 3.304 32.072C2.84533 32.2853 2.46667 32.584 2.168 32.968C1.86933 33.3413 1.65067 33.7787 1.512 34.28C1.37333 34.7813 1.304 35.3253 1.304 35.912C1.304 36.4347 1.37333 36.9467 1.512 37.448C1.64 37.9387 1.84267 38.3813 2.12 38.776C2.38667 39.16 2.73333 39.4693 3.16 39.704C3.576 39.9387 4.072 40.056 4.648 40.056C5.17067 40.056 5.608 39.9547 5.96 39.752C6.30133 39.5387 6.584 39.2613 6.808 38.92C7.02133 38.568 7.19733 38.1733 7.336 37.736C7.464 37.2987 7.58133 36.856 7.688 36.408C7.784 35.9493 7.88 35.5013 7.976 35.064C8.072 34.6267 8.2 34.2373 8.36 33.896C8.50933 33.544 8.70667 33.2667 8.952 33.064C9.19733 32.8507 9.51733 32.744 9.912 32.744C10.328 32.744 10.6693 32.8293 10.936 33C11.2027 33.1707 11.416 33.3947 11.576 33.672C11.7253 33.9493 11.832 34.264 11.896 34.616C11.96 34.9573 11.992 35.2987 11.992 35.64C11.992 36.0667 11.9387 36.4827 11.832 36.888C11.7253 37.2933 11.56 37.6507 11.336 37.96C11.112 38.2587 10.8293 38.504 10.488 38.696C10.136 38.8773 9.72 38.968 9.24 38.968L9.24 40.408C9.93333 40.408 10.536 40.2853 11.048 40.04C11.5493 39.784 11.9653 39.4427 12.296 39.016C12.616 38.5787 12.856 38.0773 13.016 37.512C13.176 36.936 13.256 36.328 13.256 35.688C13.256 35.1653 13.192 34.6427 13.064 34.12C12.9467 33.5867 12.7547 33.1067 12.488 32.68C12.2107 32.2533 11.8587 31.9067 11.432 31.64C10.9947 31.3627 10.472 31.224 9.864 31.224C9.29867 31.224 8.82933 31.3307 8.456 31.544C8.08267 31.7467 7.77333 32.024 7.528 32.376C7.28267 32.7173 7.09067 33.1067 6.952 33.544C6.80267 33.9813 6.67467 34.4293 6.568 34.888C6.46133 35.336 6.36533 35.7787 6.28 36.216C6.184 36.6533 6.06667 37.048 5.928 37.4C5.78933 37.7413 5.61333 38.0187 5.4 38.232C5.176 38.4347 4.888 38.536 4.536 38.536C4.16267 38.536 3.85333 38.4667 3.608 38.328C3.352 38.1787 3.14933 37.9867 3 37.752C2.85067 37.5067 2.744 37.2293 2.68 36.92C2.616 36.6107 2.584 36.296 2.584 35.976C2.584 35.1867 2.77067 34.5413 3.144 34.04C3.50667 33.528 4.09867 33.2293 4.92 33.144ZM7.384 23.985L7.384 22.577C6.89333 22.6303 6.472 22.7583 6.12 22.961C5.75733 23.1637 5.45867 23.425 5.224 23.745C4.98933 24.0543 4.81867 24.417 4.712 24.833C4.59467 25.2383 4.536 25.6757 4.536 26.145C4.536 26.7957 4.65333 27.3663 4.888 27.857C5.112 28.3477 5.42667 28.7583 5.832 29.089C6.22667 29.409 6.696 29.649 7.24 29.809C7.77333 29.969 8.34933 30.049 8.968 30.049C9.58667 30.049 10.1573 29.969 10.68 29.809C11.192 29.6383 11.6347 29.393 12.008 29.073C12.3813 28.7423 12.6693 28.337 12.872 27.857C13.0747 27.3663 13.176 26.8063 13.176 26.177C13.176 25.121 12.8987 24.289 12.344 23.681C11.7893 23.0623 11 22.6783 9.976 22.529L9.976 23.921C10.616 24.0063 11.112 24.241 11.464 24.625C11.816 24.9983 11.992 25.521 11.992 26.193C11.992 26.6197 11.9067 26.9877 11.736 27.297C11.5653 27.6063 11.3413 27.857 11.064 28.049C10.776 28.241 10.4507 28.385 10.088 28.481C9.72533 28.5663 9.352 28.609 8.968 28.609C8.552 28.609 8.152 28.5663 7.768 28.481C7.37333 28.3957 7.02667 28.257 6.728 28.065C6.42933 27.8623 6.18933 27.5957 6.008 27.265C5.82667 26.9343 5.736 26.5237 5.736 26.033C5.736 25.457 5.88 24.9983 6.168 24.657C6.456 24.3157 6.86133 24.0917 7.384 23.985ZM4.728 21.0552L13 21.0552L13 19.6952L9.32 19.6952C8.78667 19.6952 8.31733 19.6419 7.912 19.5352C7.496 19.4286 7.144 19.2579 6.856 19.0232C6.568 18.7886 6.34933 18.4792 6.2 18.0952C6.05067 17.7112 5.976 17.2472 5.976 16.7032L4.536 16.7032C4.51467 17.4392 4.664 18.0472 4.984 18.5272C5.304 19.0072 5.8 19.4126 6.472 19.7432L6.472 19.7752L4.728 19.7752L4.728 21.0552ZM8.872 14.9684C8.37067 14.9684 7.928 14.9044 7.544 14.7764C7.14933 14.6377 6.81867 14.451 6.552 14.2164C6.28533 13.9817 6.08267 13.7097 5.944 13.4004C5.80533 13.0804 5.736 12.7444 5.736 12.3924C5.736 12.0404 5.80533 11.7097 5.944 11.4004C6.08266 11.0804 6.28533 10.803 6.552 10.5684C6.81866 10.3337 7.14933 10.1524 7.544 10.0244C7.928 9.88571 8.37067 9.81637 8.872 9.81637C9.37333 9.81637 9.82133 9.88571 10.216 10.0244C10.6 10.1524 10.9253 10.3337 11.192 10.5684C11.448 10.803 11.6453 11.0804 11.784 11.4004C11.9227 11.7097 11.992 12.0404 11.992 12.3924C11.992 12.7444 11.9227 13.0804 11.784 13.4004C11.6453 13.7097 11.448 13.9817 11.192 14.2164C10.9253 14.451 10.6 14.6377 10.216 14.7764C9.82133 14.9044 9.37333 14.9684 8.872 14.9684ZM8.872 16.4084C9.48 16.4084 10.0453 16.323 10.568 16.1524C11.0907 15.9817 11.5493 15.7257 11.944 15.3844C12.328 15.043 12.632 14.6217 12.856 14.1204C13.0693 13.619 13.176 13.043 13.176 12.3924C13.176 11.731 13.0693 11.155 12.856 10.6644C12.632 10.163 12.328 9.74171 11.944 9.40037C11.5493 9.05904 11.0907 8.80304 10.568 8.63237C10.0453 8.46171 9.48 8.37637 8.872 8.37637C8.264 8.37637 7.69866 8.46171 7.176 8.63237C6.64266 8.80304 6.184 9.05904 5.8 9.40037C5.40533 9.74171 5.096 10.163 4.872 10.6644C4.648 11.155 4.536 11.731 4.536 12.3924C4.536 13.043 4.648 13.619 4.872 14.1204C5.096 14.6217 5.40533 15.043 5.8 15.3844C6.184 15.7257 6.64267 15.9817 7.176 16.1524C7.69867 16.323 8.264 16.4084 8.872 16.4084ZM1.576 6.69287L13 6.69287L13 5.33287L1.576 5.33287L1.576 6.69287ZM1.576 3.146L13 3.146L13 1.786L1.576 1.786L1.576 3.146Z" fill="#FFC6C6"/>
              <line x1="8.5" y1="59" x2="8.5" y2="94" stroke="#FFC6C6"/>
            </svg>

            </div>
            <SlideOne />
            <SlideTwo />
            <SlideThree />
            <CTASection />
          </>
          : 
          <MobileVersion />
        }
      </div>
    </>
  )
}
