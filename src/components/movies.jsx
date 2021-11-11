import react from 'react';
import React, { Component } from 'react';
import Like  from './common/like';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';

class Movies extends React.Component {

    state = {
        movies: getMovies(),
        pageSize: 4
    };

    handelDelete = (movie) => {
        // console.log(movie);
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        console.log(movies);
        this.setState({ movies });
    } 

    handelLike = (movie) => {
        // console.log("Liked", movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ... movies[index] }
        movies[index].like = !movies[index].like;
        this.setState( { movies } )
    }

    handelPageChange = (page) => {
        console.log(page);
    }

    render() { 

        const { length:count } = this.state.movies;

        if(count === 0 )
            return <p>There are  not data is the datatbase</p>

        return (
        <react.Fragment>
            <p>Showing { count } movies in the database</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Gener</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.movies.map( movie =>(
                        <tr key={ movie._id }>
                            <td>{ movie.title }</td>
                            <td>{ movie.genre.name }</td>
                            <td>{ movie.numberInStock }</td>
                            <td>{ movie.dailyRentalRate }</td>
                            <td>
                                <Like 
                                    like={ movie.like } 
                                    onClick= { () => this.handelLike(movie) }
                                />
                            </td>
                            <td><button onClick={ () => this.handelDelete(movie) } className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    )) }
                </tbody>
            </table>

            <Pagination
                itemsCount ={count} 
                pageSize = {this.state.pageSize}
                onPageChange = {this.handelPageChange}
            />
        </react.Fragment>
        );
    }
}
 
export default Movies;