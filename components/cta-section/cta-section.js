import React, { useState, useEffect } from 'react'
import FormPopup from '../form-popup/form-popup'


export default function SlideFifteen() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visible, setVisible] = useState(false);

    const variations = {
        open: { x: 0, opacity: 1},
        closed: { x: -100, opacity: 0}
    }
    const variationsTwo = {
        open: { },
        closed: { }
    }

    useEffect(() => {
        // if(window.innerWidth > 1024){
        //     AOS.init({
        //         easing: 'ease', // default easing for AOS animations
        //         once: false, // whether animation should happen only once - while scrolling down
        //         mirror: true, // whether elements should animate out while scrolling past them
        //     });
        // }else{
        //     AOS.init({
        //         once: true,
        //     });
        // }
        // setTimeout(function(){
        //     if(window.location.href.includes("agency-submit")){
        //         console.log("window.location.href");
        //     }
        //     if (window.location.href.includes("agency-submit") && document.getElementById("sign__two__wrapper")) {
        //         document.getElementById("sign__two__wrapper").click();
        //     }
        // }, 1000)


        setTimeout(function(){
            setIsLoaded(true);
        }, 6000)

        window.addEventListener("scroll", function(){
            var element =  document.getElementById('we-amplify-the-voices');
            var bodyRect = document.body.getBoundingClientRect(),
            elemRect = element.getBoundingClientRect(),
            offset   = elemRect.top - bodyRect.top;

            if((elemRect.top - 550) < 0){
                setVisible(true);
            }
        })

        if(window.screen.width < 600){
            Array.from(document.querySelectorAll(".end__block")).map((element, index) => {
                element.classList.add("active");
            })
        }
    }, []);

    function drawSvg(event){
        if(document.querySelectorAll(".end__block.active").length > 0){
            if(window.screen.width > 600){
                document.querySelectorAll(".end__block.active")[0].classList.remove("active");
            }
        }

        if(event.target.classList.contains("sign__one")){
            document.getElementById("sign__one__wrapper").classList.add("active");
            event.target.classList.add("playing");
        }
        if(event.target.classList.contains("sign__two")){
            document.getElementById("sign__two__wrapper").classList.add("active");
            event.target.classList.add("playing");
        }
        if(event.target.classList.contains("sign__three")){
            document.getElementById("sign__three__wrapper").classList.add("active");
            event.target.classList.add("playing");
        }
    }

    function openForm(){
        document.getElementById("form__wrapper").classList.remove("close__form__state");
    }

    return (
        <>
        <section id="we-amplify-the-voices">
            {
                isLoaded
                ?
                <>
                    <div className="container-fluid slide__fifteen__container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-8 slide__fifteen__left">
                                <h2 className="avant">
                                

                                    <span 
                                    
                                    className="white__text ">WE AMPLIFY </span>
                                    
                                    <span 
                                    
                                    className="white__text ">THE VOICES THAT </span>
                                    <span 
                                   
                                    className="rose__text ">SET THE TONE</span>
                                </h2>
                                <p className="avant "
                                    
                                >
                                    <strong>Add Culture is RAXO's challenge to the players in the ad world</strong>, both big & small, to represent the voices they are advertising to by allocating a portion of their marketing budgets to minority-owned agencies.
                                </p>

                            </div>
                            <div className="col-sm-12 col-lg-4 slide__fifteen__right">
                                
                            </div>
                        </div>
                        <div className="row row__second">
                            <div className="col-lg-12">
                                <a href="https://stories.addculture.com" className="end__block active" id="sign__one__wrapper" target="_BLANK">
                                <div 
                                    
                                >
                                    
                                    <div className="end__block__svg sign__one"  onMouseEnter={drawSvg} onClick={drawSvg}>
                                        <svg width="332" id="sign__one" height="252" viewBox="0 0 332 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M106.335 243.647C164.015 205.321 219.284 167.352 253.894 105.405C257.926 98.1882 289.308 36.5778 265.624 32.2541C195.962 19.5365 129.991 44.882 97.6914 109.744C65.7878 173.812 45.6254 298.227 131.031 326.097C243.651 362.848 440.124 348.435 526.167 254.186C675.936 90.135 255.905 -109.039 123.005 50.2318C78.6815 103.35 0.0560142 225.63 49.5341 299.44C102.442 378.367 263.125 371.152 326.13 315.558C407.616 243.657 500.945 64.8342 404.539 -29.1181C326.589 -105.085 187.545 -147.432 86.5782 -91.1103C-74.0999 -1.48019 8.26531 309.359 194.623 309.359C238.544 309.359 281.381 147.501 179.188 166.157C140.063 173.3 169.228 292.084 239.694 221.33" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>

                                    <div className="end__block__info">
                                        <h2 className=" helvetica uppercase">To Blog</h2>
                                        <h3 className=" avant uppercase">Explore <br/> Stories</h3>
                                    </div>
                                    <div className="end__block__link">
                                        
                                            <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M39.2683 10.3672L0 10.3672L-3.96201e-07 12.6332L39.2683 12.6332L39.2683 10.3672Z" fill="#F4F4F4"/>
                                                <path d="M30.447 23L28.8535 21.4138L38.8129 11.5L28.8535 1.58621L30.447 2.78615e-07L41.9998 11.5L30.447 23Z" fill="#F4F4F4"/>
                                            </svg>
                                    </div>
                                    
                                    
                                </div>
                                </a>

                                <div href="#" onClick={openForm} className="end__block" id="sign__two__wrapper" target="_BLANK">
                                    <div 
                                    animate={visible ? "open" : "closed"}
                                    variants={variationsTwo}
                                    transition={{ duration: 0.9, type: "spring", stiffness: 50,  delay: 0.3 }}
                                    >
                                        <div className="end__block__svg sign__two" onMouseEnter={drawSvg} onClick={drawSvg}>
                                            <svg width="399" id="sign__two" height="252" viewBox="0 0 399 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M144.474 -106.717C144.517 -39.5513 155.341 26.9329 157.854 93.9429C158.352 107.221 158.667 120.849 157.277 134.105C155.96 146.677 146.748 120.726 146.601 120.256C133.275 77.7043 138.082 29.9027 146.747 -13.0744C152.685 -42.5291 161.998 -72.3186 176.095 -98.9978C178.478 -103.507 183.186 -117.06 189.642 -110.115C213.614 -84.3217 219.868 -39.8048 226.315 -6.98377C234.776 36.0907 237.87 79.3273 236.921 123.204C236.67 134.799 235.833 146.291 234.534 157.806C234.158 161.14 234.328 166.704 232.945 169.975C231.63 173.083 229.589 163.982 229.013 160.661C225.667 141.357 225.735 121.342 225.686 101.822C225.594 65.1414 227.941 28.6336 232.949 -7.71197C234.073 -15.8641 235.999 -41.336 245.62 -21.1453C256.757 2.22829 261.834 29.6321 266.514 54.7951C274.123 95.7072 279.271 137.172 280.471 178.803C281.798 224.89 278.893 273.978 268.913 319.209C268.308 321.95 266.834 330.273 264.326 332.507C258.945 337.299 258.954 319.012 257.988 311.883C251.991 267.666 250.189 221.865 253.238 177.307C254.345 161.124 254.764 138.951 263.429 124.403C267.827 117.018 275.882 127.688 278.944 130.882C298.676 151.465 319.56 174.392 332.565 199.938C340.332 215.197 345.487 234.027 344.749 251.311C344.644 253.786 342.097 267.307 337.41 261.652C322.643 243.836 324.844 214.204 326.751 192.907C328.458 173.849 330.399 149.771 342.516 133.797C352.485 120.654 362.5 144.919 365.727 151.739C376.792 175.122 380.51 201.443 375.603 226.948C375.074 229.694 370.75 251.933 364.287 248.057C346.784 237.559 351.788 205.628 354.466 190.124C357.955 169.927 363.599 147.791 375.474 130.619C380.988 122.646 394.999 138.227 399.232 141.8C422.96 161.828 446.777 186.792 455.934 217.152" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            
                                            </svg>
                                        </div>

                                        <div className="end__block__info">
                                            <h2 className=" helvetica uppercase">To Be Featured</h2>
                                            <h3 className=" avant uppercase">Submit a <br/> minority-owned <br/> agency</h3>
                                        </div>
                                        <div className="end__block__link">
                                                <svg width="42" height="23"  viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M39.2683 10.3672L0 10.3672L-3.96201e-07 12.6332L39.2683 12.6332L39.2683 10.3672Z" fill="#F4F4F4"/>
                                                    <path d="M30.447 23L28.8535 21.4138L38.8129 11.5L28.8535 1.58621L30.447 2.78615e-07L41.9998 11.5L30.447 23Z" fill="#F4F4F4"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>

                                <a href="https://raxo.co/contact" className="end__block" id="sign__three__wrapper" target="_BLANK">
                                <div 
                               
                                >
                                    <div className="end__block__svg sign__three" onMouseEnter={drawSvg} onClick={drawSvg}>
                                        <svg width="433" height="252" id="sign__three" viewBox="0 0 433 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 239.599C166.97 231.718 367.405 221.168 507.854 120.398C564.951 79.4313 539.756 70.5272 481.004 76.218C383.532 85.6593 290.688 140.351 218.695 205.422C214.659 209.071 146.862 285.108 169.538 290.447C225.103 303.528 302.6 230.575 341.794 199.17C354.297 189.153 394.493 157.075 355.426 157.075C276.602 157.075 177.975 176.681 117.903 232.097C116.774 233.138 62.5252 293.486 89.8131 290.864C169.3 283.226 250.18 213.25 304.204 158.742C319.195 143.616 372.129 90.3888 318.662 90.3888C262.273 90.3888 207.637 120.174 166.234 157.075C152.936 168.927 116.192 210.827 143.927 227.929C202.514 264.053 287.593 221.315 324.858 174.58C341.401 153.833 442.027 -28.0624 374.015 -35.481C291.6 -44.4707 202.482 65.5299 162.103 123.732C132.053 167.045 103.044 217.875 90.2262 269.607" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="end__block__info">
                                        <h2 className=" helvetica uppercase">To Hire Raxo</h2>
                                        <h3 className=" avant uppercase">Consult  on  <br/> Your campaign</h3>
                                    </div>
                                    <div className="end__block__link">
                                        
                                            <svg width="42" height="23" viewBox="0 0 42 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M39.2683 10.3672L0 10.3672L-3.96201e-07 12.6332L39.2683 12.6332L39.2683 10.3672Z" fill="#F4F4F4"/>
                                                <path d="M30.447 23L28.8535 21.4138L38.8129 11.5L28.8535 1.58621L30.447 2.78615e-07L41.9998 11.5L30.447 23Z" fill="#F4F4F4"/>
                                            </svg>
                                        
                                    </div>
                                    
                                </div>
                                </a>
                            </div>
                        </div>
                    
                        <div className="row row__third">
                            <p>HELLO, <a href="https://stories.addculture.com/#join-our-newsletter" target="_BLANK" id="join__newsletter">JOIN OUR NEWSLETTER</a> TO STAY UP TO DATE</p>
                        </div>
                    </div>
                </>
                : ""
            }
        </section>

        <FormPopup />
        </>
    )
}
