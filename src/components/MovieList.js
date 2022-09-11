import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {

    constructor(){
        super()
            this.state = {

                movies : []

            
        }
    }


    async componentDidMount(){
        try {
            

            let response = await fetch('http://localhost:3001/api/movies');
            let result = await response.json()
            console.log(result.data);

            this.setState({
                movies: result.data
            })

        } catch (error) {

            console.error(error);
            
        }
    }
    render() {
        return (
            <>
   
            <h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>
            
           
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                     this.state.movies.map((movie,index)=>{
                                        return  <Movie  {...movie}  key={movie.title + index} />
                                    })
                                }
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>            
         </>
        );
    }
}

export default MovieList;

