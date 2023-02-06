import React, { useState, useEffect } from 'react';
import { ListContainer } from '../../../components/layout';
import { MovieListItem } from '../../../components/core/Movies';
import { NavBar } from '../../../components/navigation';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import styles from './MoviesPage.module.css';

interface ApplicantProps {
  name: string
};

interface DeadlineProps {
  date: Date
};

function useSearchParams() {
  return new URLSearchParams(useLocation().search);
}

const Applicant = ({ name }: ApplicantProps): JSX.Element => {
  return <span>{name}</span>
}

const Deadline = ({ date }: DeadlineProps): JSX.Element => {
  return <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
}

export function MoviesPage(): JSX.Element {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(searchParams.get('filter') || 'top-rated');

  useEffect(() => {
    const qs = new URLSearchParams();
    
    filter && qs.append('filter', filter);
    
    navigate(`?${qs.toString()}`, { replace: true })  

  }, [
    navigate, 
    filter
  ]);

  const movieNote = filter === 'top-rated' 
    ? `You're being shown top-rated movies. You can filter your favorite ones instead.`
    : `You're being shown your favorite movies. You can load top-rated ones instead.`;

  const linkToLoad = filter === 'top-rated' 
    ? "/movies?filter=favorites" 
    : "/movies?filter=top-rated";

  const filterToSet = filter === 'top-rated'
    ? "favorites"
    : "top-rated";

  const loadText = filter === 'top-rated'
    ? "Show favorites only"
    : "Load top-rated movies";

  return (
    <div className={styles['movies-page']}>
      <NavBar>
        <Applicant name="Daniel Mendez" />
        <Deadline date={new Date(2023, 1, 6)} />
      </NavBar>
        <>
          <p className={styles['movie-note']}>
            {movieNote}
          </p>
          <NavLink to={linkToLoad}
            onClick={() => setFilter(filterToSet)}
          >
            {loadText}
          </NavLink>
        </>
      <ListContainer>
        <NavLink to="/movies/209">
          <MovieListItem title="The Matrix" voteAverage={8} />
        </NavLink>
        <NavLink to="/movies/209">
          <MovieListItem title="The Godfather Part II" voteAverage={2} />
        </NavLink>
        <NavLink to="/movies/209">
          <MovieListItem title="Parasite" voteAverage={9.9} isFavorite={true}/>
        </NavLink>
        <NavLink to="/movies/209">
          <MovieListItem title="The Godfather Part II" voteAverage={2} />
        </NavLink>
        <NavLink to="/movies/209">
          <MovieListItem title="The Godfather Part II" voteAverage={2} />
        </NavLink>
        <NavLink to="/movies/209">
          <MovieListItem title="The Godfather Part II" voteAverage={2} />
        </NavLink>
      </ListContainer>
    </div>
  )
}