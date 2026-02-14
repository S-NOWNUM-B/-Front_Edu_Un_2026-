import React, { useState } from 'react';
import type { User } from '../types';
import UserCard from './UserCard';

const INITIAL_USERS: User[] = [
	{ name: 'Alice', email: 'alice@example.com', age: 25 },
	{ name: 'Bob', email: 'bob@example.com', age: 30 },
	{ name: 'Charlie', email: 'charlie@example.com', age: 35 },
];

const SearchApp = () => {
	const [users] = useState<User[]>(INITIAL_DATA);
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);

		const filtered = users.filter(user =>
			user.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredUsers(filtered);
	};

	const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
		setSearchTerm('');
		setFilteredUsers(users);
	};

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={handleSearch}
				placeholder='Поиск пользователя...'
			/>
			<button onClick={handleClear}>Очистить</button>

			<div>
				{filteredUsers.length > 0 ? (
					filteredUsers.map((u, idx) => (
						<UserCard key={idx} user={u} />
						<p>Найден пользователь: {u.name}</p>
						</Usercard>
					))
				) : (
					<p>Пользователь не найден</p>
				)}
			</div>
		</div>
	);
};

export default SearchApp;