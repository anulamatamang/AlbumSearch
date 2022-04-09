import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { v4 as uuidv4 } from 'uuid';
import AlbumCard from './components/AlbumCard';
import Header from './components/Header';
import SearchIcon from './components/SearchIcon';
import './App.css';

function App() {
  const [resultCount, setResultCount] = useState(0);
  const [resultsArray, setResultsArray] = useState(null);
  const [input, setInput] = useState('');

  const fetchAlbums = async (input) => {
    if (input === '') {
      alert(`Please enter an artist's name`);
      return;
    }

    let url = `https://itunes.apple.com/search?term=${input}&media=music&entity=album&attribute=artistTerm&limit=200`;

    const result = await fetchJsonp(url);
    const response = await result.json();
    console.log('response', response);
    setResultCount(response.resultCount);
    setResultsArray(response.results);
    hideHeaderInBody();
  };

  function hideHeaderInBody() {
    const a = document.querySelector('.albums-container__h2');
    a.style.display = 'none';
  }

  return (
    <div className='App'>
      <Header fetchAlbums={fetchAlbums} />

      <section className='albums-container'>
        <h2 className='albums-container__h2'>Search albums by artist's name</h2>

        {resultsArray?.map((item) => {
          return <AlbumCard key={uuidv4()} {...item} />;
        })}
      </section>

      {/* <button className='show-more'>Show More</button> */}
    </div>
  );
}

export default App;
