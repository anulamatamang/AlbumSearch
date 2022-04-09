import React, { useState } from 'react';

function Header({ fetchAlbums }) {
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      //   console.log('You pressed enter');
      handleFetch();
    }
  }

  function handleFetch() {
    fetchAlbums(input);
    setInput('');
  }

  return (
    <header className='search-header'>
      <input
        className='search-header__input'
        type='text'
        placeholder='Search an artist'
        onChange={handleInputChange}
        value={input}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={() => handleFetch()}>Search</button>
      {/* <SearchIcon onClick={() => console.log('clicked')} /> */}

      <div className='search-header__results-display'>
        <div className='results-flex'>
          <p cxlass='result'>Results: </p>
          <p className='count'></p>
        </div>
      </div>
      <div className='search-header__loading-animation-div'>
        <div className='search-header__loading'></div>
      </div>
    </header>
  );
}

export default Header;
