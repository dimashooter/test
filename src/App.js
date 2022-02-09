import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Comments from './Pages/Comments';
import ViewMore from './Pages/ViewMore';

function App() {
	const [splash, setSplash] = useState(true);
	console.log(splash);

	useEffect(() => {
		setTimeout(() => {
			setSplash(false);
		}, 2000);
	});
	return (
		<>

			{splash ? (
				<div className='splash'> Dmitriy K.</div>
			) : (
				<div className="wrapper">
					<Routes>
						<Route path="/" element={<Comments />} />
						<Route path="/comments/:id" element={<ViewMore />} />
					</Routes>
				</div>
			)}
		</>
	);
}

export default App;
