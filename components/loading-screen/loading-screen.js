import React, { Component } from 'react'
import AddLogo from "../../public/images/logo/logo_add culture.svg"

export default class LoadingScreen extends Component {
    componentDidMount(){
        document.onreadystatechange = function() { 
            if (document.readyState !== "complete") { 
                
                document.querySelector( 
                  "body").style.visibility = "hidden"; 

                document.querySelector( 
                  "#add__loading").style.visibility = "visible"; 

            } else { 
                setTimeout(function(){
                    document.querySelector( 
                      "#add__loading").classList.add("loading__out");
    
                    document.querySelector( 
                      "body").style.visibility = "visible"; 

                }, 1000)
            } 
        }; 
    }
    render() {
        return (
            <div id="add__loading">
                {/* <AddLogo className="add__loading__logo" alt="Add Culture Logo" /> */}
                <img src="/images/loading_spinner.gif" alt="Add culture loading spinner"/>
            </div>
        )
    }
}
