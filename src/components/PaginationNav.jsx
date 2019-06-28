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
				className="react-pagination-link"
				disabled={isFirstPage}
				onClick={() => !isFirstPage && setCurrentPage(currentPage - 1)}
			>
				<span class="react-icon">
					<i class="fas fa-chevron-left"></i>
				</span>
			</button>
			<ul className="react-pagination-list">{paginationButtons}</ul>
			<button
				className="react-pagination-link"
				disabled={isLastPage}
				onClick={() => !isLastPage && setCurrentPage(currentPage + 1)}
			>
				<span class="react-icon">
					<i class="fas fa-chevron-right"></i>
				</span>
			</button>
		</nav>
	);
};

export default PaginationNav;
