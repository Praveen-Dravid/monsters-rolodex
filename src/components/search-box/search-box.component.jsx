import React from 'react';

import './search-box.styles.css'

export const SearchBox = (props,{handleChange}) => {
    
    return <input className='search' type="search" placeholder={props.placeholder} onChange={props.handleChange}></input>

}