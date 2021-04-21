import React, { useState, useEffect } from 'react'
import { fetchGenre, fetchMovieByGenre, fetchMovies,  fetchTopratedMovie, fetchPopularMovie, fetchUpcomingMovie } from '../../service'
import RBCarousel from 'react-bootstrap-carousel'
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

export function Home() {

    const [nowPlaying, setNowPlaying] = useState ([])
    const [genres, setGenres] = useState ([])
    const [movieByGenre, setMovieByGenre] = useState ([])
    const [topRated, setTopRated] = useState ([])
    const [popular, setPopular] = useState ([])
    const [upcoming, setUpcoming] = useState ([])
    

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies())
            setGenres(await fetchGenre())
            setMovieByGenre(await fetchMovieByGenre(28))
            setTopRated(await fetchTopratedMovie())
            setPopular(await fetchPopularMovie()) 
            setUpcoming(await fetchUpcomingMovie())
            
        }

        fetchAPI()
    }, [])

    const handleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMovieByGenre(genre_id))
    }
    const movies = nowPlaying.slice(0, 10).map((item, index) => {
        return (
            <div style={{ height: 500, width: '100%'}} key={index}>
                <div className='carousel-center'>
                    <img style={{ height: 600, opacity: '70%' }} src={item.backPoster} alt={item.title} />
                </div>
                <div className="carousel-center" >
                    <i className="far fa-play-circle" style={{fontSize: 90, color: '#E7E713'}} >
                    </i>
                </div>
                <div className='carousel-caption' style={{ textAlign: "center", fontSize: 45}}>
                    {item.title}
                </div>
            </div>
        )
    })

    const genreList = genres.map((item, index) => {
        return (
            <li className='list-inline-item' key={index}>
                <button type='button' className='btn btn-outline-info' onClick={() => {
                    handleGenreClick(item.id)
                }}>
                    {item.name}
                </button>
            </li>
        )
    })

    const movieList = movieByGenre.slice(0, 4).map((item, index) => {
        return (
            <div className='col-md-3 col-sm-6' key={index}>
            <div className='card' >
            <Link to={`/movie/${item.id}`}>
            <img className='img-thumbnail' src={item.poster} alt={item.title}></img>
            
            </Link>
            </div>
            <div className='mt-3'>
                <p style={{fontWeight: 'bolder'}}> {item.title} </p>
                <p>Rated: {item.rating}</p>
                <ReactStars count={item.rating} size={20} color1={'#f4c10f'}> </ReactStars>
            </div>
            </div>
        )
    })


    const topRatedList = topRated.slice(0, 4).map((item, index) => {
        return (
            <div className='col-md-3' key={index} >
                <div className='card'>
                    <Link to={`/movie/${item.id}`}>
                        <img className='img-thumbnail' src={item.poster} alt={item.title}></img>
                    </Link>
                </div>

                <div className='mt-3'>
                <p style={{fontWeight: 'bolder'}}> {item.title} </p>
                <p>Rated: {item.rating}</p>
                <ReactStars count={item.rating} size={20} color1={'#f4c10f'}> </ReactStars>
            </div>

            </div>
        )
    })

    const popularList = popular.slice(0, 4).map((item, index) => {
        return (
            <div className='col-md-3' key={index} >
                <div className='card'>
                    <Link to={`/movie/${item.id}`}>
                        <img className='img-thumbnail' src={item.poster} alt={item.title}></img>
                    </Link>
                </div>

                <div className='mt-3'>
                <p style={{fontWeight: 'bolder'}}> {item.title} </p>
                <p>Rated: {item.rating}</p>
                <ReactStars count={item.rating} size={20} color1={'#f4c10f'}> </ReactStars>
            </div>

            </div>
        )
    })

    const upcomingList = upcoming.slice(0, 4).map((item, index) => {
        return (
            <div className='col-md-3' key={index} >
                <div className='card'>
                    <Link to={`/movie/${item.id}`}>
                        <img className='img-thumbnail' src={item.poster} alt={item.title}></img>
                    </Link>
                </div>

                <div className='mt-3'>
                <p style={{fontWeight: 'bolder'}}> {item.title} </p>
                <p>Rated: {item.rating}</p>
                <ReactStars count={item.rating} size={20} color1={'#f4c10f'}> </ReactStars>
            </div>

            </div>
        )
    })



    return (
      <div className='container'>
          <div className='row mt-2'>
              <div className='col'>
                  <RBCarousel
                  autoplay={true}
                  pauseOnVisibility={true}
                  slideshowSpeed={5000}
                  version={4}
                  indicator={false} >

                   {movies}
                  
                  </RBCarousel>
              </div>
          </div>

          <div className='row mt-3 ml-2'>
              <div className='col'>
                  <ul className='list-inline'>
                      {genreList}
                  </ul>
              </div>
          </div>

          <div className='row mt-3'>
              <div className='col'>
                  <div className='float-right'>
                      <i className='far fa-arrow-alt-circle-right'></i>
                  </div>
              </div>
          </div>

          <div className='row mt-3'>{movieList}</div>



      <div className='row mt-3'>
          <div className='col'>
              <p className='font-weight-bold' style={{color: '#5a606b'}} >
                  TOP RATED MOVIES
              </p>
          </div>
      </div>

      <div className='row mt-3'>
              <div className='col'>
                  <div className='float-right'>
                      <i className='far fa-arrow-alt-circle-right'></i>
                  </div>
              </div>
          </div>

      <div className='row mt-3'>{topRatedList}</div>

      <hr className='mt-5' style={{borderTop: '1px solid #5a606d'}}></hr>

      <div className='row mt-3'>
          <div className='col'>
              <p className='font-weight-bold' style={{color: '#5a606b'}} >
                  POPULAR MOVIES
              </p>
          </div>
      </div>

      <div className='row mt-3'>
              <div className='col'>
                  <div className='float-right'>
                      <i className='far fa-arrow-alt-circle-right'></i>
                  </div>
              </div>
          </div>

      <div className='row mt-3'>{popularList}</div>

      <hr className='mt-5' style={{borderTop: '1px solid #5a606d'}}></hr>

      <div className='row mt-3'>
          <div className='col'>
              <p className='font-weight-bold' style={{color: '#5a606b'}} >
                  UPCOMING MOVIES
              </p>
          </div>
      </div>

      <div className='row mt-3'>
              <div className='col'>
                  <div className='float-right'>
                      <i className='far fa-arrow-alt-circle-right'></i>
                  </div>
              </div>
          </div>

      <div className='row mt-3'>{upcomingList}</div>

      <hr className='mt-5' style={{borderTop: '1px solid #5a606d'}}></hr>
      
      <div className='row mt-3 mb-5'>
          <di className='col-md-10 col-sm-6' style={{color: '#5a606b'}}>
              <h3>ABOUT APPLICATION</h3>
              <p>React Application with Movie DB API created for Vega IT React.js job position.</p>
              <p>React Hooks, React-bootstrap,Bootstrap,Axios,React-bootstrap-carousel,React-rating-starts-component,React-router-dom,React-player.</p>
              <ul className='list-inline'>
                  <li className='list-inline-item'>
                      <a href='https://github.com/marko-gacic' style={{fontSize: 35,color: '#f4c10f'}}>
                          <i className='fab fa-github'></i>
                      </a>
                  </li>
                  <li className='list-inline-item'>
                      <a href='https://www.linkedin.com/in/marko-gacic-359429195/' style={{fontSize: 35, color: '#f4c10f'}}>
                          <i className='fab fa-linkedin ml-3'></i>
                      </a>
                  </li>
              </ul>
          </di>
      </div>

      </div>



    )
}