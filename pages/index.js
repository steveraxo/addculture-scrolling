import Head from 'next/head'
import SlideOne from '../components/slide-one/slide-one'
import SlideTwo from '../components/slide-two/slide-two'

export default function Home() {
  return (
    <div id="master__wrapper">
      {/* Imported files */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.5/lottie.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
      
      <SlideOne />
      <SlideTwo />
    </div>
  )
}
