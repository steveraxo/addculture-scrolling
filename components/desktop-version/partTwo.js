import React, { Component } from 'react'
import CtaSection from "../cta-section/cta-section"
import SliderTweets from "../slide-three/slide-three"
import SlideCarousel from "../slide-carousel/slide-carousel"
import AOS from 'aos';
import Rellax from "rellax"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MobileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {mobile: true};
    }

    componentDidMount(){
        setTimeout(function(){
            var rellax = new Rellax('.rellax', {
                wrapper:'#create-culture'
            });

        }, 1000)

        AOS.init({
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });
    }

    switchChart(event){
        var chartId = event.target.id; 

        Array.from(document.querySelectorAll(".chart__ones__first .chart__controller__element")).map((element, index) => {
            element.classList.remove("active"); 
        })

        event.target.classList.add("active"); 

        Array.from(document.querySelectorAll(".chart__ones__first .chart__wrapper")).map((element, index) => {
            element.classList.remove("active"); 
        })
        
        document.querySelectorAll(`.chart__ones__first .${chartId}__element`)[0].classList.add("active");
        
    }
    switchChartSecond(event){
        var chartId = event.target.id; 

        Array.from(document.querySelectorAll(".chart__ones__second .chart__controller__element")).map((element, index) => {
            element.classList.remove("active"); 
        })

        event.target.classList.add("active"); 

        Array.from(document.querySelectorAll(".chart__ones__second .chart__wrapper")).map((element, index) => {
            element.classList.remove("active"); 
        })

        document.querySelectorAll(`.chart__ones__second .${chartId}__element`)[0].classList.add("active");
        
    }
    render() {


        return (
            <div id="scroll-container">

                <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" integrity="sha512-f5HTYZYTDZelxS7LEQYv8ppMHTZ6JJWglzeQmr0CVTS70vJgaJiIO15ALqI7bhsracojbXkezUIL+35UXwwGrQ==" crossorigin="anonymous"></script>


                <section id="how-its-done" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase white__text aos" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                                    Let them
                                </h2>
                                <h2 className="avant uppercase white__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    Dictate
                                </h2>
                                <h2 className="avant uppercase rose__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    how
                                </h2>
                                <h2 className="avant uppercase rose__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    it's done
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="its-time" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase white__text aos" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                                    It's
                                </h2>
                                <h2 className="avant uppercase white__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    Time to
                                </h2>
                                <h2 className="avant uppercase rose__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    Ad+d
                                </h2>
                                <h2 className="avant uppercase rose__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    Culture
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaSection />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css"/>
            </div> 
        )
    }
}
