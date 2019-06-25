import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getUsers = (setUsers) => axios.get('https://api.github.com/users').then(({ data }) => setUsers(data)).catch(err => console.log(err));

const Pagination = ({ setCurrentPage, currentPage }) => (
	 <nav class="pagination is-centered" role="navigation" aria-label="pagination">
	    <a class="pagination-previous" onClick={() => setCurrentPage(currentPage - 1)}>Previous</a>
	    <a class="pagination-next" onClick={() => setCurrentPage(currentPage + 1)}>Next page</a>
	    <ul class="pagination-list">
	      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
	      <li><span class="pagination-ellipsis">&hellip;</span></li>
	      <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
	      <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
	      <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
	      <li><span class="pagination-ellipsis">&hellip;</span></li>
	      <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
	    </ul>
	  </nav>
);

const Card = ({ user }) => (
	<div class="box">
	  <article class="media">
	    <div class="media-left">
	      <figure class="image is-64x64">
	        <img src={user.avatar_url} alt="Image"/>
	      </figure>
	    </div>
	    <div class="media-content">
	      <div class="content">
	        <p>
	          <strong>{user.login}</strong> <small>@{user.login}</small> <small>31m</small>
	          <br/>
	          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
	        </p>
	      </div>
	      <nav class="level is-mobile">
	        <div class="level-left">
	          <a class="level-item" aria-label="reply">
	            <span class="icon is-small">
	              <i class="fas fa-reply" aria-hidden="true"></i>
	            </span>
	          </a>
	          <a class="level-item" aria-label="retweet">
	            <span class="icon is-small">
	              <i class="fas fa-retweet" aria-hidden="true"></i>
	            </span>
	          </a>
	          <a class="level-item" aria-label="like">
	            <span class="icon is-small">
	              <i class="fas fa-heart" aria-hidden="true"></i>
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
}

const App = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {getUsers(setUsers)}, []);
  return (
	  <div class="container">
	  <br/>
	  {paginate(users, 3, currentPage).map(user => <Card user={user} />)}
	  <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
	  </div>
  );
}

export default App;
