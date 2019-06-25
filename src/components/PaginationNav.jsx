import React, { useState } from 'react';

const PaginationNav = ({ pagesAmount, setCurrentPage, currentPage }) => {
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

export default PaginationNav;
