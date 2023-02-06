import React, { PropsWithChildren } from 'react';
import styles from './ListContainer.module.css';

interface ListContainerProps {
  children?: React.ReactNode;
};

export function ListContainer ({ children }: ListContainerProps): JSX.Element {
  return (
    <div className={styles['list-container']}>
      { children }
    </div>
  )
}