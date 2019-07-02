import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from './components/Paginate';
import Card from './components/Card';
import book from './book.svg';

const getUsers = (setUsers) =>
	axios
		.get('https://api.github.com/users')
		.then(({ data }) => setUsers(data))
		.catch((err) => console.log(err));

const PAGE_SIZE = 3;

const App = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers(setUsers);
	}, []);
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title is-1">Frontend Pagination.</h1>
					<h2 className="subtitle is-4">
						<div className="level">
							<div className="level-left">Made with React.</div>
							<div className="level-right">
								<a
									style={{ color: 'inherit' }}
									href="https://elpopisencio.github.io"
								>
									<span class="icon is-large">
										<i class="fa fa-home"></i>
									</span>
								</a>
								<a
									style={{ color: 'inherit' }}
									href="https://github.com/elpopisencio/pagination"
								>
									<span class="icon is-large">
										<i class="fab fa-github"></i>
									</span>
								</a>
							</div>
						</div>
					</h2>
				</div>
			</div>
			<img className="project-image" src={book} alt="" />
			<section className="section">
				<h3 className="title">Description</h3>
				<p className="subtitle">
					In this project I made a frontend pagination wraper with React.
				</p>
			</section>
			<Paginate pageSize={PAGE_SIZE}>
				{users.map((element) => (
					<Card user={element} key={element.id} />
				))}
			</Paginate>
		</div>
	);
};

export default App;
