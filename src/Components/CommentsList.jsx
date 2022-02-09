import React from 'react';
import CommentsItem from './CommentsItem';

function CommentsList({ comments }) {
	return (
		<>
			{comments?.map(comment => (
				<CommentsItem key={comment.id} id={comment.id} name={comment.name} email={comment.email} />
			))}
		</>
	);
}

export default CommentsList;
