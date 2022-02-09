import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './CommentsContainer.module.css';
const { Meta } = Card;
function CommentsItem({ id, name, email }) {
	const [active, setActive] = useState(false);
	const addToFavorite = id => {
		if (localStorage.getItem(id)) {
			localStorage.removeItem(id);
			setActive(false);
		} else {
			setActive(id);
			localStorage.setItem(id, JSON.stringify({ id, name, email, active }));
		}
	};
	return (
		<>
			<Card className={active === id ? `${styles.card} ${styles.active}` : ``}>
				<Meta title={name} description={email} />
				<NavLink to={`/comments/${id}`}>View More</NavLink>
				<Button className={styles.commentsBtn} onClick={() => addToFavorite(id)}>
					Add to Favorite
				</Button>
			</Card>
		</>
	);
}

export default CommentsItem;
