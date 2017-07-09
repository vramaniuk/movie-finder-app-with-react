import React from 'react';

export const truncate = (text) => {
  const textLength = text.length;
  if (textLength > 170) {
    return `${text.slice(0, 170)}...`;
  }
  return text;
};

const filterGenres = (genreIds, genres) => {
  const moviesGenres = [];

  genreIds.forEach((genreId) => {
    const movieGenre = genres.find((genre) => genre.id === genreId);

    if (movieGenre) {
      moviesGenres.push(movieGenre);
    }
  });

  return moviesGenres;
};

export const assembleGenres = (movie, allGenres) => {
  if (movie.genres) {
    return movie.genres;
  }
  if (movie.genre_ids) {
    return filterGenres(movie.genre_ids, allGenres);
  }
  return undefined;
};

export const renderGenres = (genres) => {
  const genreNames = genres.map((genre) => genre.name);
  return genreNames.join(', ');
};

const compileCountriesIntoString = (countries) => {
  const countryNames = countries.map((country) => country.name);
  return countryNames.join(', ');
};

export const renderCountries = (countries) => {
  if (countries.length === 1) {
    return <span><b>Country:</b> {countries[0].name}</span>;
  }
  return (
    <span><b>Countries:</b> {compileCountriesIntoString(countries)}</span>
  );
};

export const formatMoney = (money) => {
  if (money !== 0) {
    return `$${money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  }
  return 'N/A';
};

export const formatDate = (releaseDate) => {
  const date = new Date(releaseDate);
  return date.toLocaleDateString();
};
