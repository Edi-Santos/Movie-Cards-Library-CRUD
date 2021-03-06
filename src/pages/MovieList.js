import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.takeMovies = this.takeMovies.bind(this);
  }

  componentDidMount() {
    this.takeMovies();
  }

  async takeMovies() {
    const takingMovies = await movieAPI.getMovies();

    this.setState({
      movies: takingMovies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="movie-list" data-testid="movie-list">
        {loading
          ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
