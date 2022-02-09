import React, { useEffect, useMemo, useState } from 'react';
import CommentsItem from './CommentsItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../reducers/ActionCreator';
import { Form, Input, Select } from 'antd';
import { getTotalCount } from '../utils/getTotalCount';
import styles from './CommentsContainer.module.css';
import { DebounceInput } from 'react-debounce-input';
import { getPaginationArray } from '../utils/getPaginationArray';
import Spinner from './Spinner';
import SelectComponent from './SelectComponent';
import CommentsList from './CommentsList';

function CommentsContainer() {
	const dispatch = useDispatch();
	const { comments, isLoading, error, pages } = useSelector(state => state.commentsReducer);
	const [input, setInput] = useState('');
	const [limit, setLimit] = useState(10);
	const totalPages = getTotalCount(pages, limit);

	let pagesArr = getPaginationArray(totalPages);
	const [selectedSort, setSelectedSort] = useState('');

	const sortedComments = useMemo(() => {
		if (selectedSort.length > 0) {
			return [...comments].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
		}
		return comments;
	}, [selectedSort, comments]);

	const filteredAndSortedComments = useMemo(() => {
		return sortedComments.filter(comment => comment.email.toLowerCase().startsWith(input.toLowerCase()));
	}, [input, sortedComments]);
	const sortComments = sortItem => {
		setSelectedSort(sortItem);
	};
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		dispatch(fetchComments(limit, currentPage));
	}, [currentPage]);
	return (
		<div>
			{isLoading && <Spinner />}
			{error && <h2>Ошибка</h2>}
			<Form>
				<Form.Item>
					<DebounceInput
						element={Input}
						minLength={1}
						debounceTimeout={300}
						placeholder="Найти"
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
				</Form.Item>
			</Form>
			<SelectComponent
				value={selectedSort}
				onChange={sortComments}
				defaultValue="Сортировка по:"
				options={[
					{ value: 'name', name: 'По названию' },
					{ value: 'email', name: 'По email' },
				]}
			/>
			<div style={{ paddingTop: '50px' }}>
				{filteredAndSortedComments.length ? <CommentsList comments={filteredAndSortedComments} /> : <h2>Попробуйте ввести другой email</h2>}
			</div>

			<div className={styles.paginationWrapper}>
				{pagesArr &&
					pagesArr.map((elem, index) => (
						<span
							onClick={() => setCurrentPage(elem)}
							key={index}
							className={currentPage === elem ? `${styles.paginationItem} ${styles.paginationItem__current}` : `${styles.paginationItem} `}>
							{elem}
						</span>
					))}
			</div>
		</div>
	);
}

export default CommentsContainer;
