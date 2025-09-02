// Favorites utility functions
export const addToFavorites = (workout) => {
  const existingFavorites = JSON.parse(localStorage.getItem('favoriteWorkouts') || '[]');
  const isAlreadyFavorite = existingFavorites.some(fav => fav.id === workout.id);
  
  if (!isAlreadyFavorite) {
    const updatedFavorites = [...existingFavorites, workout];
    localStorage.setItem('favoriteWorkouts', JSON.stringify(updatedFavorites));
    return true; // Added successfully
  }
  return false; // Already exists
};

export const removeFromFavorites = (workoutId) => {
  const existingFavorites = JSON.parse(localStorage.getItem('favoriteWorkouts') || '[]');
  const updatedFavorites = existingFavorites.filter(fav => fav.id !== workoutId);
  localStorage.setItem('favoriteWorkouts', JSON.stringify(updatedFavorites));
};

export const isFavorite = (workoutId) => {
  const existingFavorites = JSON.parse(localStorage.getItem('favoriteWorkouts') || '[]');
  return existingFavorites.some(fav => fav.id === workoutId);
};
