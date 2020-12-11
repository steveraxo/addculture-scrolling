import React, { Component } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Slider from "react-slick";
import Chart14 from "./chart14"

export default class SlideTen extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            category: "Agency", 
            visible: true, 
            count: 1,
            animationState: true,
            isLoaded: true, 
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.slideByNumber = this.slideByNumber.bind(this);
        this.slideByCategory = this.slideByCategory.bind(this);
    }

    next(){
        
        this.setState({
            count: this.state.count + 1,
        })

        document.querySelectorAll(".slider__ten__prev")[0].classList.remove("disabled");
        console.log(this.state.count);
        if(this.state.count < 3){
            this.slider.slickNext();
            
        }else{
            this.setState({
                animationState: true,
            })

            
        }

        if(this.state.count > 2){
            this.setState({
                count: 2,
            })
        }
        if(this.state.count === 2){
            document.querySelectorAll(".slider__ten__next")[0].classList.add("off");
        }
    }
    previous(){
        this.slider.slickPrev();     
        console.log(this.state.count);

        this.setState({
            count: this.state.count - 1,
        })

        if(this.state.count <= 2){
            this.setState({
                count: 1,
            })
        }

        if(this.state.count === 3){
            document.querySelectorAll(".slider__ten__next")[0].classList.remove("off");

        }
        if(this.state.count === 2){
            document.querySelectorAll(".slider__ten__prev")[0].classList.add("disabled");


        }
    }
    slideByNumber(event){
        [...document.querySelectorAll(".slider__container__pagination .active")].map((element, index) =>{
            element.classList.remove("active")
        })

        event.target.classList.add("active");

        document.querySelectorAll(`.pagination__words [data-number="${event.target.getAttribute("data-number")}"]`)[0].classList.add("active");

        const newCat = event.target.getAttribute("data-text");
        
        this.setState(state => ({ category: newCat }))

        this.slider.slickGoTo(event.target.getAttribute("data-number"));
    }
    slideByCategory(event){
        [...document.querySelectorAll(".slider__container__pagination .active")].map((element, index) =>{
            element.classList.remove("active")
        })

        event.target.classList.add("active");

        document.querySelectorAll(`.pagination__words [data-number="${event.target.getAttribute("data-number")}"]`)[0].classList.add("active");

        const newCat = event.target.getAttribute("data-text");
        
        this.setState(state => ({ category: newCat }))

        this.slider.slickGoTo(event.target.getAttribute("data-number"));
    }
    componentDidMount(){
        setTimeout(function(){
            this.setState({
                isLoaded: true,
            })
        }.bind(this), 100)

        if(window.screen.width > 1024){
            window.addEventListener("scroll", function(){
                var element =  document.getElementById('slide__ten');
                var bodyRect = document.body.getBoundingClientRect(),
                elemRect = element.getBoundingClientRect(),
                offset   = elemRect.top - bodyRect.top;

                if((elemRect.top - 250) < 0){
                    this.setState({
                        visible: true, 
                    });
                }
            }.bind(this))
        }

    }
    render() {
        const variations = {
            open: { x: 0, opacity: 1},
            closed: { x: -100, opacity: 0}
        }
        const variationsThree = {
            open: { x: 0, opacity: 1},
            closed: { x: 100, opacity: 0}
        }
        const variationsTwo = {
            open: { y: 0, opacity: 1},
            closed: { y: 100, opacity: 0}
        }

        const settings = {
            swipe: false,
            swipeToSlide: false,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToScroll: 1,
            slidesToShow: 2,
            arrows: true,
            beforeChange: (current, next) => {
                [...document.querySelectorAll(".slider__container__pagination .active")].map((element, index) =>{
                    element.classList.remove("active")
                })

                if(document.querySelectorAll(`.pagination__numeric [data-number="${next}"]`).length > 0){
                    document.querySelectorAll(`.pagination__numeric [data-number="${next}"]`)[0].classList.add("active");
                }

                if(document.querySelectorAll(`.pagination__words [data-number="${next}"]`).length > 0){
                    document.querySelectorAll(`.pagination__words [data-number="${next}"]`)[0].classList.add("active");
                }

                if(document.querySelectorAll(`.pagination__numeric [data-number="${next}"]`).length > 0){
                    const newCat = document.querySelectorAll(`.pagination__numeric [data-number="${next}"]`)[0].getAttribute("data-text");
                
                    this.setState(state => ({ category: newCat }))
                }
            }
        };

        return (
            <>
            <Head>
                {
                    this.state.isLoaded
                    ?
                    <>
                        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    </>
                    :""
                }
            </Head>
            <section id="slide__ten">
                {
                    this.state.isLoaded
                    ?
                    <>
                        <div id="g10-next" className="is__disabled" onClick={this.next}></div>
                        <div id="g10-prev" onClick={this.previous}></div>
                        <div className="container-fluid slider__container">
                            <div className="slider__ten__grid"></div>
                            <div className="slide__ten__info">
                                <h2 className="avant white__text"
                                animate={this.state.visible ? "open" : "closed"}
                                variants={variations}
                                transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                >{this.state.category}</h2>
                            </div>
                            <div className="slider__ten">
                                <div className="slider__ten__arrows">
                                    <div className="slider__ten__prev slider__arrows disabled" onClick={this.previous}>
                                        <img src="/images/helpers/prevArrow.svg"  alt=""
                                        animate={this.state.visible ? "open" : "closed"}
                                        variants={variations}
                                        transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                        />
                                    </div>
                                    <div className="slider__ten__next slider__arrows" onClick={this.next}>
                                        <img src="/images/helpers/nextArrow.svg" alt=""
                                        animate={this.state.visible ? "open" : "closed"}
                                        variants={variations}
                                        transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                        />
                                    </div>
                                </div>
                                <Slider ref={c => (this.slider = c)} {...settings}  >
                                    <div className="slide__ten__slide">
                                        <h3 className="avant">
                                            <span className="rose__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.1 }}
                                            >When Your</span>
                                            
                                            <span className="rose__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.15 }}
                                            >Agency</span>
                                            
                                            <span className="white__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                            >Is Not</span>
                                            
                                            <span className="white__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.25 }}
                                            >Diverse</span>                                 
                                        </h3>
                                    </div>
                                    <div className="slide__ten__slide">
                                        <h3 className="avant">
                                            
                                            <span className="rose__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.1 }}
                                            >how can</span>

                                            <span className="rose__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.15 }}
                                            >you really</span>

                                            <span className="rose__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                            >speak to</span>

                                            <span className="white__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.25 }}
                                            >a Diverse</span>  

                                            <span className="white__text"
                                            animate={this.state.visible ? "open" : "closed"}
                                            variants={variationsThree}
                                            transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.30 }}
                                            >audience?</span>                               
                                        </h3>
                                    </div>
                                    <div className="slide__ten__slide">
                                        <Chart14 customState={this.state.animationState} />
                                    </div>         
                                    <div className="slide__ten__slide empty"></div>
                                    <div className="slide__ten__slide empty"></div>
                                    <div className="slide__ten__slide empty"></div>
                                    <div className="slide__ten__slide empty"></div>
                                    <div className="slide__ten__slide empty"></div>
                                </Slider>
                            </div>
                        </div>

                        <div className="container-fluid slider__container__pagination">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 pagination__numeric">
                                    <div className="number number__one helvetica active" data-text="Agency" data-number="0" onClick={this.slideByNumber}><p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.1 }}
                                    >01</p></div>
                                    <div className="number number__two helvetica" data-text="Audience" data-number="1" onClick={this.slideByNumber}>
                                    <p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.2 }}
                                    >02</p></div>
                                    <div className="number number__three number__three__two helvetica" data-text="Performance" data-number="2" onClick={this.slideByNumber}><p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.3 }}
                                    >03</p></div>
                                </div>
                                <div className="col-sm-12 col-lg-6 pagination__words">
                                    <div className="number number__one avant uppercase active" data-number="0" data-text="Agency" onClick={this.slideByCategory}><p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.15 }}
                                    >Agency</p></div>
                                    <div className="number number__two avant uppercase" data-number="1" data-text="Audience" onClick={this.slideByCategory}><p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.25 }}
                                    >Audience</p></div>
                                    <div className="number number__three number__three__one avant uppercase" data-number="2" data-text="Performance" onClick={this.slideByCategory}><p
                                    animate={this.state.visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.35 }}
                                    >Performance</p></div>
                                </div>
                            </div>
                        </div>
                    </>
                    : ""
                }
            </section>
            </>
        )
    }
}
