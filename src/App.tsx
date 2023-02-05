import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { MoviesPage } from './views/Movies/MoviesPage/MoviesPage';
import { MoviesDetailPage } from './views/Movies/MoviesDetailPage/MoviesDetailPage';
import { NotFoundRoute } from './components/routing/NotFoundRoute/NotFoundRoute';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MoviesDetailPage />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </div>
  );
}

export default App;
