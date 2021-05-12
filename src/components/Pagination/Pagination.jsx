// import React from "react";

// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
// 	const pageNumbers = [];
// 	console.log(totalPosts, "totalpost");
// 	console.log(postsPerPage, "postsPerPage");
// 	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
// 		pageNumbers.push(i);
// 	}
// 	console.log(pageNumbers, "pageNumbers");
// 	return (
// 		<nav>
// 			<ul className="pagination">
// 				{pageNumbers.map((number) => (
// 					<li key={number} className="page-item">
// 						<a onClick={() => paginate(number)} href="!#" className="page-link">
// 							{number}
// 						</a>
// 					</li>
// 				))}
// 			</ul>
// 		</nav>
// 	);
// };

// export default Pagination;

// export const filterItems = () => {
// 	let selectedPage = 1;
// 	let pageSize = 4;
// 	let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 	let selectedPageFirstIndex = (selectedPage - 1) * pageSize;
// 	return items.filter(
// 		(item, index) =>
// 			index >= selectedPageFirstIndex &&
// 			index < selectedPageFirstIndex + pageSize
// 	);
// };
