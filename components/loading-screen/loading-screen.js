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

                document.querySelector( 
                  "#add__loading").style.display = "none"; 

                document.querySelector( 
                  "body").style.visibility = "visible"; 
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