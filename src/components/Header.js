import React, { Component } from 'react'
import { RiSunFill } from "react-icons/ri";

export class Header extends Component {
    render() {
        const { handleDarkMode } = this.props;

        return (
            <div className='header'>
                <h1>
                    Notes
                </h1>
                <button className='save' onClick={() => handleDarkMode((previousDarkMode) => ! previousDarkMode)}>
                <RiSunFill 
                    className='mode-icon'
                    size='1.3em'
                />
                </button>
            </div>
        )
    }
}

export default Header