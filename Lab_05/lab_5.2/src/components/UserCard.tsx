import React from 'react';
import type { User } from '../types.tsx';

interface UserCardProps {
	user: User;
	isActive: boolean;
	children: React.ReactNode;
}

const UserCard = ({ user, isActive = true, children, }: UserCardProps) => {
	return (
		<div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor: isActive ? '#e0ffe0' : '#ffe0e0'}}>
			<h2>{user.name}</h2>
			<p>Email: {user.email} | Возраст: {user.age}</p>
			<div>
				{children}
			</div>
		</div>
	);
};

export default UserCard;