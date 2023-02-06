import React, { PropsWithChildren } from 'react';
import styles from './MovieListItem.module.css';
import { ReactComponent as StarOutlineIcon } from '../../../../assets/icons/star/outline.svg';
import { ReactComponent as StarSolidIcon } from '../../../../assets/icons/star/solid.svg';

interface MovieListItemProps {
  title: string,
  voteAverage: number,
  isFavorite?: boolean
}

const extractInitials = (str: string) => {
  const splittedString = str.split(" ");
  const initials = splittedString.length >= 2
    ? splittedString[0][0] + splittedString[1][0]
    : splittedString[0][0];

  return initials;
}

const TitleCircle = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className={styles['title-circle']}>
      {children}
    </div>
  )
}

const MovieMetadata = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className={styles['movie-metadata']}>
      {children}
    </div>
  )
}

export const FavoriteIndicator = ({ on = false }): JSX.Element => {
  return (
    <div className={styles['favorite-indicator']}>
      { on 
        ? <StarSolidIcon color="#ffc100"/>
        : <StarOutlineIcon />
      }
    </div>
  )
}

const Title = ({ value }: { value: string }) => (<p>{value}</p>);
const VoteAverage = ({ value }: { value: number }) => (<p>{`${value}/10`}</p>);

export function MovieListItem ({ 
  title, 
  voteAverage,
  isFavorite
}: MovieListItemProps): JSX.Element {
  return (
    <div className={styles['movie-list-item']}>
      <TitleCircle>{extractInitials(title)}</TitleCircle>
      <MovieMetadata>
        <Title value={title} />
        <VoteAverage value={voteAverage} />
      </MovieMetadata>
      <FavoriteIndicator on={isFavorite}/>
    </div>
  )
}