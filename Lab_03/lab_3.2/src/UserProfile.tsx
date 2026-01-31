import React, { useState, useEffect } from 'react';

interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
}

interface UserProfileProps {
	userId: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchUser = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/users/${userId}`,
					{ signal: abortController.signal }
				);

				if (!response.ok) {
					throw new Error('Ошибка при загрузке данных пользователя')
				}

				const data = await response.json();
				setUser(data);
			} catch (err: unknown) {
				if (err instanceof Error) {
					if (err.name !== 'AbortError') {
						setError(err.message);
					}
				} else {
					setError('Неизвестная ошибка');
				}
			} finally {
				setLoading(false);
			}
		};
 
		fetchUser();

		return() => {
			abortController.abort();
		};

	}, [userId]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			{user ? (
				<>
					<h3>{user.name}</h3>
					<p>Email: {user.email}</p>
					<p>Phone: {user.phone}</p>
				</>
			) : (
				<p>No user data available</p>
			)}
		</div>
	);
};

export default UserProfile;