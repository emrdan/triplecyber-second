import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import styles from './MoviesDetailPage.module.css';
import { FavoriteIndicator } from '../../../components/core/Movies/MovieListItem/MovieListItem';
import { useQuery } from 'react-query';
import { getMovieById } from '../../../services/api';
import { isFavoriteMovie, addMovieToFavorites } from '../../../services/localstorage';


const MovieHero = ({ backgroundUrl = '' }: { backgroundUrl: string}) => {
  const url = "https://image.tmdb.org/t/p/w500" + backgroundUrl;
  return (
    <div style={{ backgroundImage: `url(${url})`}} className={styles['movie-hero']}></div>
  )
}

export function MoviesDetailPage(): JSX.Element {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(isFavoriteMovie(id as string));
  const { isLoading, error, data } = useQuery(
    ['movieById', id], 
    () => getMovieById(id)
  );

  const markAsFavorite = (id: string) => {
    addMovieToFavorites(id);
    setIsFavorite(true);
  }

  return (
    <div className={styles['movies-detail-page']}>
      {error? (
          <>Sorry! There was an error!</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <MovieHero backgroundUrl={data['poster_path']}/>
            <div className={styles['movie-details']}>
              <div className={styles['movie-metadata']}>
                <p>{data['title']}</p>
                <p>{`${(Math.round(data['vote_average'] * 10) / 10).toFixed(1)}/10`}</p>
              </div>
              <FavoriteIndicator on={isFavorite} />
            </div>
            <div className={styles['movie-overview']}>
              <p>
                {data['overview']}
              </p>
            </div>
            {!isFavorite &&
              <button className={styles['mark-favorite-button']}
                onClick={() => markAsFavorite(id as string)}
              >
                Mark as Favorite!
              </button>
            }
          </>
        ) : null}
    </div>
  )
}