import React from 'react';
import { useState } from 'react';

interface ErrorState {
	name: string;
	email: string;
	age: string;
}

const RegistrationForm: React.FC = () => {
	// ===== Task 1: Состояние для полей формы =====
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [age, setAge] = useState<string>('');

	const [errors, setErrors] = useState<ErrorState>({name: '', email: '', age: ''});
	const [success, setSuccess] = useState<boolean>(false);

// ===== Task 2: Валидация полей =====
	const validateName = (value: string) =>
		value.length < 2 ? 'Name must be at least 2 characters' : '';

	const validateEmail = (value: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return !regex.test(value) ? 'Invalid email format' : '';
	};

	const validateAge = (value: string) => {
		const num = Number(value);
		return isNaN(num) || num < 18 ? 'Age must be a number and at least 18' : '';
	};

// ===== Task 1 & 2: Обработка отправки формы =====

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setName(val);
		setErrors(prev => ({...prev, name: validateName(val) }));
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setEmail(val);
		setErrors(prev => ({...prev, email: validateEmail(val) }));
	};

	const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		setAge(val);
		setErrors(prev => ({...prev, age: validateAge(val) }));
	};

// ===== Task 3: Обработка Submit =====

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const nErr = validateName(name);
		const eErr = validateEmail(email);
		const aErr = validateAge(age);

		if (nErr || eErr || aErr) {
			setErrors({ name: nErr, email: eErr, age: aErr });
			setSuccess(false);
			return;
		}

		setSuccess(true);
		setErrors({ name: '', email: '', age: '' });
	};

	return (
		<div>
			<h2>Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
					{errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
				</div>
				<div>
					<input type='email' placeholder='Email' value={email} onChange={handleEmailChange} />
					{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
				</div>
				<div>
					<input type='text' placeholder='Age' value={age} onChange={handleAgeChange} />
					{errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
				</div>
				<button type='submit'>Register</button>
			</form>
			{success && <p style={{ color: 'green' }}>Registration successful!</p>}
		</div>
	);
};

export default RegistrationForm;