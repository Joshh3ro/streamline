import React, { Component } from 'react'
import { MdSearch } from 'react-icons/md';

export class Search extends Component {
    render() {
        const { handleSearch } = this.props;

        return (
            <div className='search-bar'>
                <MdSearch className='search-icon' size='1.3em' />
                <input
                    onChange={(event) => handleSearch(event.target.value)}
                    type='text'
                    placeholder='search...'></input>
            </div>
        )
    }
}

export default Search