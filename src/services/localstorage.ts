export const addMovieToFavorites = (id: string) => {
  if (!localStorage.getItem(id)) {
    localStorage.setItem(id, id);
  }
}

export const isFavoriteMovie = (id: string) => {
  return localStorage.getItem(id) != null;
}