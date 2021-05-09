import React from "react";
import {
	fetchGenre,
	fetchMovieByGenre,
	fetchMovies,
	fetchTopratedMovie,
	fetchPopularMovie,
	fetchUpcomingMovie,
} from "../service";
const TopRated = ({ topRated, loading, item }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<ul className="list-group mb-4">
			{topRated.map((topRated) => (
				<li key={topRated.id} className="col-md-3">
					{topRated.title}
				</li>
			))}
		</ul>
	);
};

export default TopRated;
