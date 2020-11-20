import React, { Component } from 'react'
import CtaSection from "../cta-section/cta-section"
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class MobileIndex extends Component {
    
    componentDidMount(){
        AOS.init();
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
        };
        return (
            <>
                <section id="are-failing" className="mobile__slide">
                    <div className="floating__circle">
                        <img src="/images/plus.svg" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    ADVERTISING
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    AGENCIES 
                                </h2>
                                <h2 className="avant uppercase rose__text" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                                    ARE Failing
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="to-diversify" className="mobile__slide">
                    <div className="floating__circle">
                        <img src="/images/Ellipse32.svg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    To
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Diversify 
                                </h2>
                                <h2 className="avant uppercase gray__text" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                    Their
                                </h2>
                                <h2 className="avant uppercase gray__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                    Team
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="open-doors" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    To Open
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Their 
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                    Doors to
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                    Bipoc +
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                    Diverse
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
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
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    Advertising
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Is White
                                </h2>
                                <img src="/images/firstData.svg" alt="93.8% of the people in executive positions in the top 50 agencies are white" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="is-male" className="mobile__slide">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    Advertising
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Is male
                                </h2>
                                <img src="/images/secondData.svg" alt="93.8% of the people in executive positions in the top 50 agencies are white" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="carousel-info">
                    <div className="container">
                        <div className="row">
                            <Slider {...settings}>
                                <div className="carousel__info__slide slide__one uppercase">
                                    <p className=" avant small__title ">Agency</p>
                                    <h2 className="avant rose__text ">When your</h2>
                                    <h2 className="avant rose__text ">agency</h2>
                                    <h2 className="avant rose__text ">partner</h2>
                                    <h2 className="avant white__text ">is not</h2>
                                    <h2 className="avant white__text ">diverse</h2>
                                    <p className=" helvetica smaller__title ">01</p>
                                </div>

                                <div className="carousel__info__slide slide__two uppercase">
                                    <p className="avant small__title ">Audience</p>
                                    <h2 className="avant rose__text">How can</h2>
                                    <h2 className="avant rose__text">your really</h2>
                                    <h2 className="avant rose__text">speak to</h2>
                                    <h2 className="avant white__text">a diverse</h2>
                                    <h2 className="avant white__text">audience?</h2>
                                    <p className=" helvetica smaller__title ">02</p>
                                </div>

                                <div className="carousel__info__slide slide__three uppercase">
                                    <p className="avant small__title ">Audience</p>
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

                <section id="create-culture" className="mobile__slide">
                    <div className="floating__circle">
                        <img src="/images/shapesOne.svg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    Bipoc
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Create
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                    The
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                    Culture
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="we-appropiate" className="mobile__slide">
                    <div className="floating__circle">
                        <img src="/images/shapesTwo.svg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000"  alt=""/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    We
                                </h2>
                                <h2 className="avant uppercase black__text second__line" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    appropiate

                                    <img src="/images/drawedLine.svg" alt=""/>
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
                                    in our
                                </h2>
                                <h2 className="avant uppercase black__text" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
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
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    Let them
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Dictate
                                </h2>
                                <h2 className="avant uppercase rose__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    how
                                </h2>
                                <h2 className="avant uppercase rose__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
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
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                                    It's
                                </h2>
                                <h2 className="avant uppercase white__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Time to
                                </h2>
                                <h2 className="avant uppercase rose__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Ad+d
                                </h2>
                                <h2 className="avant uppercase rose__text" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    Culture
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <CtaSection />

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-grid-only@1.0.0/bootstrap.css"/>
            </> 
        )
    }
}
