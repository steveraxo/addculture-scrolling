import React, { Component } from 'react'
import CtaSection from "../cta-section/cta-section"
import ReactFullpage from '@fullpage/react-fullpage'; 
import SlideFailing from "../animated-slides/slide-bands/slide-failing"
import SlideBipoc from "../animated-slides/slide-bands/slide-bipoc"
import SlideBands from "../animated-slides/slide-bands/slide-bands"
import SlideLet from "../animated-slides/slide-bands/slide-letThem"
import SlideTime from "../animated-slides/slide-bands/slide-time"
import SlideSecondData from "../animated-slides/slide-bands/slide-second-data"
import SlideTweets from "../animated-slides/slide-bands/slide-tweets"
import SlideCarousel from "../slide-carousel/slide-carousel"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MobileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {mobile: true, tweetCounter: 0, controller: false, bipocController: false, letOne: false, letTwo: false,};
    }

    parallaxContainer() {
        window.addEventListener("scroll",function() {
            var element =  document.getElementById('create-culture');
            var bodyRect = document.body.getBoundingClientRect(),
                elemRect = element.getBoundingClientRect(),
                offset   = elemRect.top - bodyRect.top;

            var finalX = elemRect.top * -1;

            var elementSecond =  document.getElementById('we-appropiate');
            var bodyRectSecond = document.body.getBoundingClientRect(),
                elemRectSecond = elementSecond.getBoundingClientRect(),
                offset   = elemRectSecond.top - bodyRectSecond.top;

            var finalXSecond = elemRectSecond.top ;

            
            if (document.getElementById("shape__one") !== null) {
                document.getElementById("shape__one").style.transform = `translateY(${(finalX / 2)}px)`
            }

            if (document.getElementById("shape__two") !== null) {
                document.getElementById("shape__two").style.transform = `translateY(${(finalX / 2) + 10}px)`
            }

            if (document.getElementById("shape__three") !== null) {
                document.getElementById("shape__three").style.transform = `translateY(${(finalX / 2) + 50 }px)`
            }

            if (document.getElementById("shape__four") !== null) {
                document.getElementById("shape__four").style.transform = `translateY(${(finalX / 2) + 70}px)`
            }

            if (document.getElementById("shape__five") !== null) {
                document.getElementById("shape__five").style.transform = `translateY(${(finalX / 2) - 15}px)`
            }

            if (document.getElementById("shape__six") !== null) {
                document.getElementById("shape__six").style.transform = `translateY(${(finalX / 2) - 40}px)`
            }

            if (document.getElementById("shape__seven") !== null) {
                document.getElementById("shape__seven").style.transform = `translateY(${(finalX / 2)}px)`
            }

            if (document.getElementById("shape__eigth") !== null) {
                document.getElementById("shape__eigth").style.transform = `translateY(${(finalX / 2)}px)`
            }
            
            if (document.getElementById("shape__one__one") !== null) {
                document.getElementById("shape__one__one").style.transform = `translateY(${(finalXSecond / 2) + 70}px)`
            }

            if (document.getElementById("shape__one__two") !== null) {
                document.getElementById("shape__one__two").style.transform = `translateY(${(finalXSecond / 2) - 15}px)`
            }

            if (document.getElementById("shape__one__three") !== null) {
                document.getElementById("shape__one__three").style.transform = `translateY(${(finalXSecond / 2) + 3}px)`
            }

            if (document.getElementById("shape__one__four") !== null) {
                document.getElementById("shape__one__four").style.transform = `translateY(${(finalXSecond / 2) + 100}px)`
            }

            if (document.getElementById("shape__one__five") !== null) {
                document.getElementById("shape__one__five").style.transform = `translateY(${(finalXSecond / 2) - 27}px)`
            }
        },
        { passive: false }
        )
    }


    componentDidMount(){
        fullpage_api.setAllowScrolling(false, "down, up");

        this.parallaxContainer();

        AOS.init({
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
        });

        document.getElementById("failing__animation__scroller").addEventListener("click", function(){
            fullpage_api.moveSectionDown();

            fullpage_api.setAllowScrolling(true, "down, up");

            setTimeout(function(){
                document.querySelectorAll(".are__failing__content__container")[0].classList.add("active");
                document.querySelectorAll(".failing__animation")[0].classList.remove("active");
            }, 1500)
        })
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
    
    afterLoad(origin, destination, direction){
        // change bar color 
        if(destination.index === 2 || destination.index === 4 || destination.index === 7 || destination.index === 8 || destination.index === 9 || destination.index === 10){
            document.querySelectorAll(".navbar")[0].classList.add("black__menu");
            document.querySelectorAll(".social__menu")[0].classList.add("black__menu");
            document.querySelectorAll(".navbar.container-fluid")[0].classList.add("black__menu");
            document.getElementById("fp-nav").classList.add("black__menu");
        }else{
            document.querySelectorAll(".navbar")[0].classList.remove("black__menu");
            document.querySelectorAll(".social__menu")[0].classList.remove("black__menu");
            document.querySelectorAll(".navbar.container-fluid")[0].classList.remove("black__menu");
            document.getElementById("fp-nav").classList.remove("black__menu");
        }
        
        if(destination.index === 2 && !this.state.bipocController){
            fullpage_api.setAllowScrolling(false, "down, up");

            document.getElementById("bipoc__data").click();
            
            setTimeout(function(){
                document.getElementById("open-doors").classList.add("black");
            }, 3000)

            setTimeout(function(){
                fullpage_api.moveSectionDown();
            }, 4000)

            setTimeout(function(){
                document.getElementById("open-doors").classList.remove("black");

                document.querySelectorAll(".bipoc__data__container__outer")[0].classList.add("active");
                document.querySelectorAll(".bipoc__data__container")[0].classList.remove("active");
                fullpage_api.setAllowScrolling(true, "down, up");

                this.setState({bipocController: true})

            }.bind(this), 5500)
        }
        if(origin.index === 2){
            document.getElementById("bipocbands").click();
        }
        if(origin.index === 4){
            document.getElementById("bipocbandsSecond").click();
        }
        if(origin.index === 9){
            document.getElementById("slide__tweets").click();
            setTimeout(function(){
                fullpage_api.moveSectionDown();
            }, 13500)
        }
        if(origin.index === 10 && !this.state.letOne){

            fullpage_api.setAllowScrolling(false, "down, up");

            document.getElementById("let__them").click();
            
            setTimeout(function(){
                fullpage_api.moveSectionDown();
            }, 4500)

            setTimeout(function(){
                document.querySelectorAll(".let__them__content__container")[0].classList.add("active");
                document.querySelectorAll(".let__them__container")[0].classList.remove("active");
                fullpage_api.setAllowScrolling(true, "down, up");

                this.setState({letOne: true})

            }.bind(this), 5500)
        }
        if(origin.index === 11 && !this.state.letTwo){
            fullpage_api.setAllowScrolling(false, "down, up");

            document.getElementById("its__time").click();

            setTimeout(function(){
                fullpage_api.moveSectionDown();
            }, 5500)

            setTimeout(function(){
                document.querySelectorAll(".its__time__content__container")[0].classList.add("active");
                document.querySelectorAll(".its__time__container")[0].classList.remove("active");
                fullpage_api.setAllowScrolling(true, "down, up");

                this.setState({letOne: true})

            }.bind(this), 7000)
        }
    }

    render() {

        const settingsMobile = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
        };

        return (
            <div id="scroll-container">

                <ReactFullpage
                //fullpage options
                scrollingSpeed = {1000} /* Options here */
                navigation = {true}
                //normalScrollElements = {'#slide__eleven'}
                navigationPosition = {"left"}
                scrollBar = {true}
                // onLeave={onLeave.bind(this)}
                afterLoad={this.afterLoad.bind(this)}
                responsiveSlides = {true}
                render={({ state, fullpageApi }) => {
                

                    return (
                        <ReactFullpage.Wrapper>
                            
                            <section id="are-failing" className="mobile__slide section">
                                <div className="are__failing__content__container">
                                    <div className="floating__circle">
                                        <img src="/images/plus.svg" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                
                                                <h2 className=" aos avant uppercase white__text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                                    ADVERTISING
                                                </h2>
                                                <h2 className=" aos avant uppercase white__text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                                    AGENCIES 
                                                </h2>
                                                <h2 className="aos avant uppercase rose__text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                                    ARE Failing
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SlideFailing />
                            </section>
            
                            <section id="to-diversify" className="mobile__slide section">
                                <div className="floating__circle">
                                    <img src="/images/Ellipse32.svg" className="aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                                                To
                                            </h2>
                                            <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                                Diversify 
                                            </h2>
                                            <h2 className="avant uppercase gray__text aos" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                                                Their
                                            </h2>
                                            <h2 className="avant uppercase gray__text aos" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                                                Teams
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
            
                            <section id="open-doors" className="mobile__slide section">
                                <div className="bipoc__data__container__outer">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                                                    To Open
                                                </h2>
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                                    Their 
                                                </h2>
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
                                                    Doors to
                                                </h2>
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                                                    Bipoc +
                                                </h2>
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                                                    Diverse
                                                </h2>
                                                <h2 className="avant uppercase black__text aos" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                                                    Creators
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <SlideBipoc />
                            </section>
            
                            <SlideBands customClass="section section__full" />
            
                            <section id="charts__one" className="chart__ones__first section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="chart__controller">
                                                <p id="chart__one" className="chart__controller__element avant uppercase active aos" onClick={this.switchChart} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Marketing & Advertising</p>
                                                <p id="chart__two" className="chart__controller__element avant uppercase aos" onClick={this.switchChart} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">CMO</p>
                                            </div>
                                        </div>
            
                                        <div className="col-lg-12 chart__one__element chart__wrapper active">
                                            <div className="col-sm-12 col-lg-6">
                                                <div className="  avant uppercase " >
                                                    <div className="chart__title">
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="100" data-aos-duration="1000">LACK OF</h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="150" data-aos-duration="1000">DIVERSITY IN </h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="200" data-aos-duration="1000">THE U.S. :</h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="250" data-aos-duration="1000">MARKETING </h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="300" data-aos-duration="1000">& ADVERTISING</h2>
                                                    </div>
                                                    
                                                    <img className="chart__image__legend aos" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" src="/images/chart__one__legend.svg" alt="Lack of diversity Legend"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-lg-6">
                                                <img className="chart__image aos" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" src="/images/chart__one__graphic.svg" alt="Lack of diversity chart" />
                                            </div>
                                        </div>
            
                                        <div className="col-lg-12 chart__two__element chart__wrapper">
                                            <div className="col-sm-12 col-lg-6">
                                                <div className="  avant uppercase " data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                                    <div className="chart__title">
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="100" data-aos-duration="1000">CMO  </h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="150" data-aos-duration="1000">Diversity</h2>
                                                        <h2 data-aos="fade-left" className="aos" data-aos-delay="200" data-aos-duration="1000">in the U.S.</h2>
                                                    </div>
            
                                                    
                                                    <img className="chart__image__legend aos" src="/images/chart__two__legend.svg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" alt="Lack of diversity Legend"/>
                                                </div>
                                            </div>
            
                                            <div className="col-sm-12 col-lg-6">
                                                <img className="chart__image aos" src="/images/chart__two__graphic.svg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" alt="Lack of diversity chart" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
            
                            <SlideSecondData customClass="section section__full" />
            
                            <section id="carousel" className="section">
                                <SlideCarousel />
                            </section>
            
                            <section id="charts__one" className="chart__ones__second section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="chart__controller">
                                                <p id="chart__three" className="chart__controller__element avant uppercase active aos" onClick={this.switchChartSecond} data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">rESPONSiBILITY</p>
                                                <p id="chart__four" className="chart__controller__element avant uppercase aos" onClick={this.switchChartSecond} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">oWNERSHIP</p>
                                                <p id="chart__five" className="chart__controller__element avant uppercase aos" onClick={this.switchChartSecond} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">EXPECTATION</p>
                                            </div>
                                        </div>
                                        <div className="chart__three__element chart__wrapper avant uppercase active col-lg-12">
                                            <div className="chart__title col-sm-12 col-lg-3">
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="100" data-aos-duration="1000">American</h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="150" data-aos-duration="1000">consumers </h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="200" data-aos-duration="1000"><span>overwhelmingly</span></h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="250" data-aos-duration="1000">support </h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="300" data-aos-duration="1000">correcting</h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="350" data-aos-duration="1000">the <span>racial</span> &</h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="400" data-aos-duration="1000"><span>social</span> inequities</h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="450" data-aos-duration="1000">in business</h2>
                                                <h2 data-aos="fade-left" className="aos" data-aos-delay="500" data-aos-duration="1000">practices.</h2> 
                                            </div>
            
                                            <div className="chart__title__image col-sm-12 col-lg-5">
                                                <img className="chart__image aos" src="/images/chart__three__graphic.svg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" alt="Lack of diversity chart" />
                                            </div>
            
                                            <div className="chart__title__legend col-sm-12 col-lg-3">
                                                <img className="chart__image__legend aos" src="/images/chart__three__legend.svg" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" alt="Lack of diversity Legend"/>
                                            </div>
            
                                        </div>
            
                                        <div className="chart__four__element chart__wrapper avant uppercase col-lg-12">
                                            <div className="chart__title col-sm-12 col-lg-3">
                                                <h2>American</h2>
                                                <h2>consumers </h2>
                                                <h2><span>overwhelmingly</span></h2>
                                                <h2>support </h2>
                                                <h2>correcting</h2>
                                                <h2>the <span>racial</span> &</h2>
                                                <h2><span>social</span> inequities</h2>
                                                <h2>in business</h2>
                                                <h2>practices.</h2> 
                                            </div>
            
                                            <div className="chart__title__image col-sm-12 col-lg-5">
                                                <img className="chart__image aos" src="/images/chart__four__graphic.svg" alt="Lack of diversity chart" />
                                            </div>
            
                                            <div className="chart__title__legend col-sm-12 col-lg-3">
                                                <img className="chart__image__legend" src="/images/chart__four__legend.svg" alt="Lack of diversity Legend"/>
                                            </div>
                                        </div>
            
                                        <div className="chart__five__element chart__wrapper avant uppercase col-lg-12">
                                            <div className="chart__title col-sm-12 col-lg-3">
                                                <h2>American</h2>
                                                <h2>consumers </h2>
                                                <h2><span>overwhelmingly</span></h2>
                                                <h2>support </h2>
                                                <h2>correcting</h2>
                                                <h2>the <span>racial</span> &</h2>
                                                <h2><span>social</span> inequities</h2>
                                                <h2>in business</h2>
                                                <h2>practices.</h2> 
                                            </div>
                    
                                            <div className="chart__title__image col-sm-12 col-lg-5">
                                                <img className="chart__image aos" src="/images/chart__five__graphic.svg" alt="Lack of diversity chart" />
                                            </div>
            
                                            <div className="chart__title__legend col-sm-12 col-lg-3">
                                                <img className="chart__image__legend" src="/images/chart__five__legend.svg" alt="Lack of diversity Legend"/>
                                            </div>
                                            
                                            
                                        </div>
            
                                    </div>
                                </div>
                            </section>
            
                            <section id="create-culture" className="mobile__slide section">
                                
                                <img src="/images/s2.svg" className="create__shape__one rellax two " id="shape__two" />
                                
                                <div className="floating__circle">
                                    <img src="/images/shapesOne.svg" className="aos hidden__desktop" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-2">
                                            <img src="/images/s1.svg" className="create__shape__one rellax one " id="shape__one" />
                                            <img src="/images/s4.svg" className="create__shape__one rellax four " id="shape__four" />
                                            <img src="/images/bipocCreate.svg" className="bipoc__shape" alt=""/>
                                        </div>
                                        <div className="col-sm-12 col-lg-6">
                                            <img src="/images/s5.svg" className="create__shape__one rellax five " id="shape__five" />
                                            <img src="/images/s6.svg" className="create__shape__one rellax six " id="shape__six" />
                                            <img src="/images/s3.svg" className="create__shape__one rellax three " id="shape__three" />
            
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                                Bipoc
                                            </h2>
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                                Create
                                            </h2>
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                                The
                                            </h2>
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                                Culture
                                            </h2>
                                        </div>
                                        <div className="col-sm-12 col-lg-3"></div>
                                    </div>
                                </div>
                            </section>
            
                            <section id="we-appropiate" className="mobile__slide section">
                                <div className="floating__circle">
                                    <img src="/images/shapesTwo.svg" className="aos hidden__desktop" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-lg-5">
            
                                            <img src="/images/s3.svg" className="create__shape__one rellax one " id="shape__one__one" />
                                            <img src="/images/s2.svg" className="create__shape__one rellax four " id="shape__one__two" />
            
                                        </div>
                                        <div className="col-sm-12 col-lg-7">
                                            <img src="/images/s5.svg" className="create__shape__one rellax five " id="shape__one__three" />
                                            <img src="/images/s6.svg" className="create__shape__one rellax six " id="shape__one__four" />
                                            <img src="/images/s7.svg" className="create__shape__one rellax three " id="shape__one__five" />
                                           
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                                We
                                            </h2>
                                            <h2 className="avant uppercase black__text second__line aos"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                                Appropriate
            
                                                <img src="/images/drawedLine.svg" alt=""/>
                                            </h2>
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                                in our
                                            </h2>
                                            <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                                ads
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                            <SlideTweets customClass="section section__full slide__tweets" />

                            <section id="how-its-done" className="mobile__slide section">
                                <div className="let__them__content__container">
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
                                </div>

                                <SlideLet />
                            </section>
            
                            <section id="its-time" className="mobile__slide section">
                                <div className="its__time__content__container">
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
                                </div>
                                <SlideTime />
                            </section>
            
                            <section id="we-amplify" className="section">
                                <CtaSection />
                                
                            </section>                
                        </ReactFullpage.Wrapper>
                        );
                    }}
                />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css"/>
            </div> 
        )
    }
}
