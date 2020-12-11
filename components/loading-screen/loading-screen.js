import React, { Component } from 'react'
import LoadingScreenAnimation from "./loading-animation";

export default class LoadingScreen extends Component {
    render() {
        return (
            <div id="add__loading">
                <LoadingScreenAnimation />
            </div>
        )
    }
}
