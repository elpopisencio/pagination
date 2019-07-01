import React from 'react';

const Card = ({ user }) => (
	<div
		className="box"
		style={{
			maxWidth: '60vh',
			display: 'block',
			marginLeft: 'auto',
			marginRight: 'auto',
		}}
	>
		<article className="media">
			<div className="media-left">
				<figure className="image is-64x64">
					<img src={user.avatar_url} alt="" />
				</figure>
			</div>
			<div className="media-content">
				<div className="content">
					<p>
						<strong>{user.login}</strong> <small>@{user.login}</small>
					</p>
				</div>
				<nav className="level is-mobile">
					<div className="level-left">
						<a href="#!" className="level-item" aria-label="reply">
							<span className="icon is-small">
								<i className="fas fa-reply" aria-hidden="true"></i>
							</span>
						</a>
						<a href="#!" className="level-item" aria-label="retweet">
							<span className="icon is-small">
								<i className="fas fa-retweet" aria-hidden="true"></i>
							</span>
						</a>
						<a href="#!" className="level-item" aria-label="like">
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

export default Card;
