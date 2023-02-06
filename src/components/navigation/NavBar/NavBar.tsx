import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  children?: React.ReactNode;
};


export function NavBar({ children }: NavBarProps ): JSX.Element {
  return (
    <div className={styles['navbar']}>
      {children}
    </div>
  )
}