import React, { useState } from 'react';
import PaginationNav from './PaginationNav';

const Paginate = ({ children, pageSize }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const pagesAmount = Math.ceil(children.length / pageSize);
	if (children.constructor !== Array) {
		console.error(
			'The children of the pagination component must be an Array'
		);
		return <div />;
	}
	const paginatedChildren = children.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);
	return (
		<div>
			{paginatedChildren}
			<PaginationNav
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				pagesAmount={pagesAmount}
			/>
		</div>
	);
};

export default Paginate;
