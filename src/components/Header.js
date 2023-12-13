import React, { Component } from 'react'

export class Header extends Component {
    render() {
        const { handleDarkMode } = this.props;

        return (
            <div className='header'>
                <h1>
                    Notes
                </h1>
                <button className='save' onClick={() => handleDarkMode((previousDarkMode) => ! previousDarkMode)}>
                    Mode
                </button>
            </div>
        )
    }
}

export default Header