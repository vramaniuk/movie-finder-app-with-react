import React from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';
import DateRange from 'material-ui/svg-icons/action/date-range';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { truncate, renderGenres, formatDate } from '../helpers/index';
import './MoviesItem.css';

const MoviesItem = ({ movie, genres, logged, isFavorite, addToFavorite, removeFromFavorite }) => (
  <Card className="MoviesItem">
    <Link to={`movie/${movie.id}`}>
      <CardMedia
        overlay={
          <CardTitle
            className="CardTitle"
            children={
              <div className="TitleInformation">
                <p className="TitleInformation__rating">
                  <span className="rating__number">{movie.vote_average}</span>
                  <StarBorder color="white" className="rating__icon" />
                </p>
                <p className="TitleInformation__rating">
                  <span className="rating__number">{formatDate(movie.release_date)}</span>
                  <DateRange color="white" className="rating__icon" />
                </p>
              </div>
                  }
            title={movie.original_title}
            subtitle={<div style={{ minHeight: '20px' }}>{renderGenres(genres)}</div>}
          />
            }
      >
        {
            movie.backdrop_path ?
              <img src={`https://image.tmdb.org/t/p/w500_and_h281_bestv2${movie.backdrop_path}`} alt="" />
              :
              <div className="MoviesItem-no-image" />
          }
      </CardMedia>
    </Link>
    <CardText style={{ minHeight: '56px' }}>{truncate(movie.overview)}</CardText>
    {
        logged &&
        <CardActions>

            {
              isFavorite ?
                <IconButton tooltip="Remove from favorites" onClick={removeFromFavorite}>
                  <Favorite color="red" />
                </IconButton>
                  :
                <IconButton tooltip="Add to favorites" onClick={addToFavorite}>
                  <FavoriteBorder color="red" />
                </IconButton>
            }

        </CardActions>
      }
  </Card>
);

export default MoviesItem;

