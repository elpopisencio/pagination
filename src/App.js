import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paginate from './components/Paginate';
import Card from './components/Card';

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
			<br />
			<Paginate pageSize={PAGE_SIZE}>
				{users.map((element) => (
					<Card user={element} key={element.id} />
				))}
			</Paginate>
		</div>
	);
};

export default App;
