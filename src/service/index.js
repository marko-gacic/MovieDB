import axios from 'axios'

const apiKey = 'e20b0342c6568ad301c545c714fcf264'
const url = 'https://api.themoviedb.org/3'
const nowPlayingUrl = `${url}/movie/now_playing`
const topratedUrl = `${url}/movie/top_rated`
const movieUrl = `${url}/movie`
const genreUrl = `${url}/genre/movie/list`
const moviesUrl = `${url}/discover/movie`
const upcomingUrl = `${url}/movie/upcoming`
const popularUrl = `${url}/movie/popular`

export const fetchMovies = async () => {
   try {
    const {data} = await axios.get(nowPlayingUrl, {
        params: {
            api_key: apiKey,
            language: 'en_US',
            page: 1
        }
    })

        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData
    }
    catch(error) {}
}

export const fetchGenre = async () => {

    try {
        const {data} = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const modifiedData = data['genres'].map((g) => ({
            id: g['id'],
            name: g['name']
        }))

        return modifiedData
        
    }catch (error) {}

}

export  const fetchMovieByGenre = async (genre_id) => {
    
    try {
        const {data} = await axios.get(moviesUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
                with_genres: genre_id
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData

    } catch (error) {}

}



export const fetchTopratedMovie = async () => {

    try {
        const {data} = await axios.get(topratedUrl, {
         params: {
             api_key: apiKey,
             language: 'en_US',
             page: 1
         }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData

    } catch(error) {

    }

}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey, 
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

export const fetchMovieVideos = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/videos`, {
            params: {
                api_key: apiKey
            }
            
        })
        return data['results'][0]

    } catch(error) {}

}

export const fetchCast = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey
            }
            
        })
        const modifiedData = data['cast'].map((c) => ({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
        }))

        

        return modifiedData

    } catch(error) {}

}

export const fetchSimilarMovie = async (id) => {
    try {
        const {data} = await axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
            
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData

        

        
    } catch(error) {}

}

export const fetchUpcomingMovie = async () => {

    try {
        const {data} = await axios.get(upcomingUrl, {
         params: {
             api_key: apiKey,
             language: 'en_US',
             page: 1
         }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData

    } catch(error) {

    }

}

export const fetchPopularMovie = async () => {

    try {
        const {data} = await axios.get(popularUrl, {
         params: {
             api_key: apiKey,
             language: 'en_US',
             page: 1
         }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))

        return modifiedData

    } catch(error) {

    }

}

