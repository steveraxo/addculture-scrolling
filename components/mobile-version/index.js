import React, { Component } from 'react'
import loadable from '@loadable/component'

import Slider from "react-slick";
import AOS from 'aos';

const CtaSection = loadable(() => import('../cta-section/cta-section'))
const SlideVideo = loadable(() => import('../slide-video/slide-video'))



import 'aos/dist/aos.css'; // You can also use <link> for styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MobileIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {mobile: true};
    }

    componentDidMount(){

        if(window.innerWidth > 1024){
            AOS.init({
                easing: 'ease', // default easing for AOS animations
                once: true, // whether animation should happen only once - while scrolling down
                mirror: false, // whether elements should animate out while scrolling past them
            });
        }else{
            AOS.init({
                once: true,
            });
        }
        if(window.innerWidth > 1024){
            this.setState({
                mobile: false,
            });
        }else{
            this.setState({
                mobile: true,
            });
        }
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
                <section id="are-failing" className="mobile__slide">
                    <div className="floating__circle">
                        <img loading="lazy" src="/images/plus.svg" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
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
                </section>
                <section id="to-diversify" className="mobile__slide">
                    <div className="floating__circle">
                        <img loading="lazy" src="/images/Ellipse32.svg" className="aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
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
                <section id="open-doors" className="mobile__slide">
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
                </section>
                <section id="is-white" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="failing__title">
                                    <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                                        Advertising
                                    </h2>
                                    <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                        Is White
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-12 is__white__data d-flex justify-content-center align-item-center">
                                <img loading="lazy" src="/images/firstData.svg" alt="93.8% of the people in executive positions in the top 50 agencies are white" className="aos" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="charts__one" className="chart__ones__first">
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
                                        
                                        <img loading="lazy" className="chart__image__legend aos" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" src="/images/chart__one__legend.svg" alt="Lack of diversity Legend"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <img loading="lazy" className="chart__image aos" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" src="/images/chart__one__graphic.svg" alt="Lack of diversity chart" />
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

                                        
                                        <img loading="lazy" className="chart__image__legend aos" src="/images/chart__two__legend.svg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" alt="Lack of diversity Legend"/>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-6">
                                    <img loading="lazy" className="chart__image aos" src="/images/chart__two__graphic.svg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" alt="Lack of diversity chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="is-male" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="failing__title">
                                    <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000">
                                        Advertising
                                    </h2>
                                    <h2 className="avant uppercase white__text aos" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                        Is male
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-12 is__male__data">
                                <img loading="lazy" src="/images/secondData.svg" className="aos" alt="93.8% of the people in executive positions in the top 50 agencies are white" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="carousel-info">
                        <div className="container">
                                <div className="row">
                                    <Slider {...settingsMobile}>
                                        <div className="carousel__info__slide slide__one uppercase">
                                            {/* <p className=" avant small__title ">Agency</p> */}
                                            <h2 className="avant rose__text ">When your</h2>
                                            <h2 className="avant rose__text ">agency</h2>
                                            <h2 className="avant rose__text ">partner</h2>
                                            <h2 className="avant white__text ">is not</h2>
                                            <h2 className="avant white__text ">diverse</h2>
                                            <p className=" helvetica smaller__title ">01</p>
                                        </div>

                                        <div className="carousel__info__slide slide__two uppercase">
                                            {/* <p className="avant small__title ">Audience</p> */}
                                            <h2 className="avant rose__text">How can</h2>
                                            <h2 className="avant rose__text">you really</h2>
                                            <h2 className="avant rose__text">speak to</h2>
                                            <h2 className="avant white__text">a diverse</h2>
                                            <h2 className="avant white__text">audience?</h2>
                                            <p className=" helvetica smaller__title ">02</p>
                                        </div>

                                        <div className="carousel__info__slide slide__three uppercase">
                                            {/* <p className="avant small__title ">Audience</p> */}
                                            <h2 className="avant ">Di</h2>
                                            <h2 className="avant ">ver</h2>
                                            <h2 className="avant colored">si</h2>
                                            <h2 className="avant colored">ty</h2>
                                            <p><strong className="avant percentage ">35%</strong></p>
                                            <p className="white__text helvetica">Diverse company culture is 35% more likely to perform better than those lacking variance.</p>
                                            <p className="gray__text helvetica">
                                                <span><small>*Source: Boston Consulting Group</small></span>
                                            </p>
                                            <p className=" helvetica smaller__title ">03</p>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                      </section>
                <section id="charts__one" className="chart__ones__second">
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
                                    <img loading="lazy" className="chart__image aos" src="/images/chart__three__graphic.svg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" alt="Lack of diversity chart" />
                                </div>

                                <div className="chart__title__legend col-sm-12 col-lg-3">
                                    <img loading="lazy" className="chart__image__legend aos" src="/images/chart__three__legend.svg" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000" alt="Lack of diversity Legend"/>
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
                                    <img loading="lazy" className="chart__image aos" src="/images/chart__four__graphic.svg" alt="Lack of diversity chart" />
                                </div>

                                <div className="chart__title__legend col-sm-12 col-lg-3">
                                    <img loading="lazy" className="chart__image__legend" src="/images/chart__four__legend.svg" alt="Lack of diversity Legend"/>
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
                                    <img loading="lazy" className="chart__image aos" src="/images/chart__five__graphic.svg" alt="Lack of diversity chart" />
                                </div>

                                <div className="chart__title__legend col-sm-12 col-lg-3">
                                    <img loading="lazy" className="chart__image__legend" src="/images/chart__five__legend.svg" alt="Lack of diversity Legend"/>
                                </div>
                                
                                
                            </div>

                        </div>
                    </div>
                </section>
                <section id="create-culture" className="mobile__slide">
                    
                    <img loading="lazy" src="/images/s2.svg" className="create__shape__one rellax two " id="shape__two" />
                    
                    <div className="floating__circle">
                        <img loading="lazy" src="/images/shapesOne.svg" className="aos hidden__desktop" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-2">
                                <img loading="lazy" src="/images/s1.svg" className="create__shape__one rellax one " id="shape__one" />
                                <img loading="lazy" src="/images/s4.svg" className="create__shape__one rellax four " id="shape__four" />
                                <img loading="lazy" src="/images/bipocCreate.svg" className="bipoc__shape" alt=""/>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                                <img loading="lazy" src="/images/s5.svg" className="create__shape__one rellax five " id="shape__five" />
                                <img loading="lazy" src="/images/s6.svg" className="create__shape__one rellax six " id="shape__six" />
                                <img loading="lazy" src="/images/s3.svg" className="create__shape__one rellax three " id="shape__three" />

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
                <section id="we-appropiate" className="mobile__slide">
                    <div className="floating__circle">
                        <img loading="lazy" src="/images/shapesTwo.svg" className="aos hidden__desktop" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5">

                                <img loading="lazy" src="/images/s3.svg" className="create__shape__one rellax one " id="shape__one__one" />
                                <img loading="lazy" src="/images/s2.svg" className="create__shape__one rellax four " id="shape__one__two" />

                            </div>
                            <div className="col-sm-12 col-lg-7">
                                <img loading="lazy" src="/images/s5.svg" className="create__shape__one rellax five " id="shape__one__three" />
                                <img loading="lazy" src="/images/s6.svg" className="create__shape__one rellax six " id="shape__one__four" />
                                <img loading="lazy" src="/images/s7.svg" className="create__shape__one rellax three " id="shape__one__five" />
                               
                                <h2 className="avant uppercase black__text aos" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    We
                                </h2>
                                <h2 className="avant uppercase black__text second__line aos"  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Appropriate

                                    <img loading="lazy" src="/images/drawedLine.svg" alt=""/>
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
                                    Add
                                </h2>
                                <h2 className="avant uppercase rose__text aos" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                    Culture
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="add__culture__by__raxo" className="section">
                                <SlideVideo />                
                            </section>
                <CtaSection />
                <script
                    src="https://code.jquery.com/jquery-3.5.1.min.js"
                    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                    crossOrigin="anonymous">
                </script>
            </div> 
        )
    }
}
