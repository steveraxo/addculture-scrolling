import React, { Component } from 'react'
import { motion } from "framer-motion"

import AddLogo from "../../public/images/logo/logenew.svg"
import BackToArrow from "../../public/images/helpers/left-arrow.svg";

import SocialMenu from "../social-menu/social-menu"

import AnimatedLogo from "../navbar/animated-logo/animated-logo"

export default class footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openedMenuCustomClass:  "",
            menuIsOpen: "",
        };

    }
    render() {

        const menuLineOneVariant = {
            visible: { width: "38px" },
            hidden: { width: "0px"},
        }

        const menuLineTwoVariant = {
            visible: { width: "29px" },
            hidden: { width: "0px"},
        }


        return (
            <>
                {/* Main navbar menu */}
                <div className="navbar container-fluid">
                    <div className="navbar__holder">
                        <a href="/" className="hidden__button__reload">Home Link</a>
                        <div className="navbar__menu__burguer">
                            <motion.div className="menu__burguer__wrapper"
                                onClick={this.OpenBanners}
                            >
                                <motion.div className="menu__burguer__line menu__burguer__line__one"
                                initial="hidden"
                                animate="visible"
                                variants={menuLineOneVariant}
                                transition={{ duration: 0.5, type: "tween" }}
                                whileHover={{ x: 5 }}
                                ></motion.div>    
                                <motion.div className="menu__burguer__line menu__burguer__line__two"
                                initial="hidden"
                                animate="visible"
                                variants={menuLineTwoVariant}
                                transition={{ delay: 0.1, duration: 0.7, type: "tween" }}
                                whileHover={{ x: -5 }}
                                ></motion.div>                    
                            </motion.div>
                        </div>
                        <div className="navbar__logo">
                            
                            <AnimatedLogo customClass="animated__logo" />
                            <AddLogo className="navbar__logo__mobile" />
                        </div>
                        <motion.div className="navbar__to__raxo explore__cta hide__mobile"
                            initial={{ y: -100, opacity: 0  }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, type: "spring", stiffness: 50, delay: 0.2 }}
                        >
                            <motion.a href="https://stories.addculture.com" whileHover={{ color: "#FFC6C6"}}>
                                <p>EXPLORE <strong> Stories</strong></p>
                            </motion.a>
                        </motion.div>
                        <motion.div className="navbar__to__raxo restart__journey hide__mobile"
                            initial={{ y: -100, opacity: 0  }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.9, type: "spring", stiffness: 50, delay: 0.5 }}
                        >
                            <BackToArrow />
                            <motion.a href="#we-amplify-the-voices" className="restart__journey__cta" whileHover={{ color: "#FFC6C6"}}>
                                <p> <strong> TAKE ACTION</strong></p>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                <SocialMenu socialMenuPosition={`lateral__menu`} />
            </>
        )
    }
}
