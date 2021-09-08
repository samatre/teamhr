import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2 tc'>
            <input className='pa3 ba1 bg-lightest-blue'
                type='search'
                placeholder='search employee'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;