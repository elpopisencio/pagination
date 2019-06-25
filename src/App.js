import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getUsers = (setUsers) =>
	axios
		.get('https://api.github.com/users')
		.then(({ data }) => setUsers(data))
		.catch((err) => console.log(err));

const Pagination = ({ pagesAmount, setCurrentPage, currentPage }) => {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === pagesAmount;
	const paginationButtons = new Array(pagesAmount)
		.fill()
		.map((button, index) => {
			const buttonNumber = index + 1;
			return (
				<li key={buttonNumber}>
					<a
						href="!#"
						className={
							'pagination-link ' +
							(currentPage === buttonNumber && 'is-current')
						}
						aria-label="Goto page"
						onClick={() => setCurrentPage(buttonNumber)}
					>
						{buttonNumber}
					</a>
				</li>
			);
		});
	return (
		<nav
			className="pagination is-centered"
			role="navigation"
			aria-label="pagination"
		>
			<a
				href="!#"
				className="pagination-previous"
				disabled={isFirstPage}
				onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}
			>
				Previous
			</a>
			<a
				href="!#"
				className="pagination-next"
				disabled={isLastPage}
				onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}
			>
				Next page
			</a>
			<ul className="pagination-list">{paginationButtons}</ul>
		</nav>
	);
};

const Card = ({ user }) => (
	<div className="box">
		<article className="media">
			<div className="media-left">
				<figure className="image is-64x64">
					<img src={user.avatar_url} alt="" />
				</figure>
			</div>
			<div className="media-content">
				<div className="content">
					<p>
						<strong>{user.login}</strong> <small>@{user.login}</small>{' '}
						<small>31m</small>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Aenean efficitur sit amet massa fringilla egestas. Nullam
						condimentum luctus turpis.
					</p>
				</div>
				<nav className="level is-mobile">
					<div className="level-left">
						<a href="!#" className="level-item" aria-label="reply">
							<span className="icon is-small">
								<i className="fas fa-reply" aria-hidden="true"></i>
							</span>
						</a>
						<a href="!#" className="level-item" aria-label="retweet">
							<span className="icon is-small">
								<i className="fas fa-retweet" aria-hidden="true"></i>
							</span>
						</a>
						<a href="!#" className="level-item" aria-label="like">
							<span className="icon is-small">
								<i className="fas fa-heart" aria-hidden="true"></i>
							</span>
						</a>
					</div>
				</nav>
			</div>
		</article>
	</div>
);

const paginate = (array, page_size, page_number) => {
	--page_number; // because pages logically start with 1, but technically with 0
	return array.slice(page_number * page_size, (page_number + 1) * page_size);
};

const Paginate = ({ children, pageSize }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pagesAmount = Math.ceil(children.length / pageSize);
	return (
		<div>
			{paginate(children, pageSize, currentPage)}
			<Pagination
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				pagesAmount={pagesAmount}
			/>
		</div>
	);
};

const App = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers(setUsers);
	}, []);
	return (
		<div className="container">
			<br />
			<Paginate pageSize={3}>
				{users.map((element) => (
					<Card user={element} key={element.id} />
				))}
			</Paginate>
		</div>
	);
};

export default App;
