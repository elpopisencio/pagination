import React from 'react';

const PaginationNav = ({ pagesAmount, setCurrentPage, currentPage }) => {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === pagesAmount;
	const paginationButtons = new Array(pagesAmount)
		.fill()
		.map((button, index) => {
			const buttonNumber = index + 1;
			return (
				<li key={buttonNumber}>
					<button
						className={
							'pagination-link ' +
							(currentPage === buttonNumber && 'is-current')
						}
						aria-label="Goto page"
						onClick={() => setCurrentPage(buttonNumber)}
					>
						{buttonNumber}
					</button>
				</li>
			);
		});
	return (
		<nav
			className="pagination is-centered"
			role="navigation"
			aria-label="pagination"
		>
			<button
				className="button pagination-previous"
				disabled={isFirstPage}
				onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}
			>
				Previous
			</button>
			<button
				className="button pagination-next"
				disabled={isLastPage}
				onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}
			>
				Next page
			</button>
			<ul className="pagination-list">{paginationButtons}</ul>
		</nav>
	);
};

export default PaginationNav;
