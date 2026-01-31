import React, { useState } from 'react';
import UserProfile from './UserProfile';

const UserLoaderApp: React.FC = () => {
	const [currentId, setCurrentId] = useState<number>(1);

	const handleRandomize = () => {
		const randomId = Math.floor(Math.random() * 10) + 1;
		setCurrentId(randomId);
	};

	return (
		<div>
			<h2>lab_3.2</h2>
			<div>
				<button onClick={() => setCurrentId(1)}>User 1</button>
				<button onClick={() => setCurrentId(2)}>User 2</button>
				<button onClick={() => setCurrentId(3)}>User 3</button>

				<button onClick={handleRandomize}>Random User</button>
			</div>

			<UserProfile userId={currentId} />

			<p><small>* При нажатии кнопок userId меняется, что триггерит useEffect в UserProfile</small></p>
		</div>
	);
};

export default UserLoaderApp;