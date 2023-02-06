import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import styles from './MoviesDetailPage.module.css';
import { FavoriteIndicator } from '../../../components/core/Movies/MovieListItem/MovieListItem';

export function MoviesDetailPage(): JSX.Element {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(true);

  return (
    <div className={styles['movies-detail-page']}>
      <div className={styles['movie-hero']}></div>
      <div className={styles['movie-details']}>
        <div className={styles['movie-metadata']}>
          <p>The Matrix</p>
          <p>9.9/10</p>
        </div>
        <FavoriteIndicator on={isFavorite} />
      </div>
      <div className={styles['movie-overview']}>
        <p>
          Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.
        </p>
      </div>
      <button className={styles['mark-favorite-button']}>Mark as Favorite!</button>
    </div>
  )
}