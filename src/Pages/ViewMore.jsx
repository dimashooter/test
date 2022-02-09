import { Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { fetchDetails } from '../reducers/ActionCreator';

function ViewMore({}) {
	const { id } = useParams();
	const { details, isLoading, error } = useSelector(state => state.commentDetails);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchDetails(id));
	}, []);
	return (
		<>
			{isLoading && <Spinner />}
			{error && <h2>Ошибка</h2>}
			<Button type="default" onClick={() => navigate(-1)}>
				Назад
			</Button>
			<div>
				<h3> {details?.name}</h3>
				<p> {details?.email}</p>
				<span>{details?.body}</span>
			</div>
		</>
	);
}

export default ViewMore;
