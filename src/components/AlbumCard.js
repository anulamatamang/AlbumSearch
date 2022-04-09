import React from 'react';

function AlbumCard(props) {
  console.log('props in album card', props);
  const {
    artworkUrl100,
    artistName,
    collectionName,
    primaryGenreName,
    trackCount,
    copyright,
  } = props;
  return (
    <div class='album-card'>
      <img alt='' className='album-img' src={artworkUrl100} />
      <div className='album-item-row'>
        <p className='label'>Artist:</p>
        <p className='artist-name'>{artistName}</p>
      </div>
      <div className='album-item-row'>
        <p className='label'>Album:</p>
        <p className='album-name'>{collectionName}</p>
      </div>
      <div className='album-item-row'>
        <p className='label'>Genre:</p>
        <p className='album-genre'>{primaryGenreName}</p>
      </div>
      <div className='album-item-row'>
        <p className='label'>No. of tracks:</p>
        <p className='track-count'>{trackCount}</p>
      </div>
      <div className='album-item-row'>
        <p className='label'>Copyright:</p>
        <p className='album-copyright'>{copyright}</p>
      </div>
    </div>
  );
}

export default AlbumCard;
