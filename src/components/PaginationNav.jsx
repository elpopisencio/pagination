import React from 'react';
import './pagination.css';

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
							(currentPage === buttonNumber && 'react-is-current')
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
			className="react-pagination"
			role="navigation"
			aria-label="pagination"
		>
			<button
				className="react-button"
				disabled={isFirstPage}
				onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}
			>
				Previous
			</button>
			<ul className="react-pagination-list">{paginationButtons}</ul>
			<button
				className="react-button"
				disabled={isLastPage}
				onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}
			>
				Next page
			</button>
		</nav>
	);
};

export default PaginationNav;
