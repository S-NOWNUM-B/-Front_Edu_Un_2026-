import React, { useState } from 'react';


interface StepCounterProps {
  initialValue?: number;
  step?: number;
}

const StepCounter: React.FC<StepCounterProps> = ({ initialValue = 0, step = 1 }) => {
	const [count, setCount] = useState<number>(initialValue);

	const [history, setHistory] = useState<number[]>([]);
	const [operationCount, setOperationCount] = useState<number>(0);

	const handleIncrement = () => {
		const newCount = count + step;
		updateStates(newCount);
	};

	const handleDecrement = () => {
		const newCount = count - step;
		updateStates(newCount);
	}

	const updateStates = (newCount: number) => {
		setCount(newCount);
		setHistory((prev) => [...prev, newCount]);
		setOperationCount((prev) => prev + 1);
	};

	const handleReset = () => {
		setCount(initialValue);
		setHistory([]);
		setOperationCount(0);
	};

	const lastFiveHistory = history.slice(-5);

	return (
		<div>
			<h3>Счётчик (Шаг: {step})</h3>
			<p>Текущее значение: <strong>{count}</strong></p>
			<p>Всего операций: {operationCount}</p>

			<div>
				<button onClick={handleIncrement}>Increment (+{step})</button>
				<button onClick={handleDecrement}>Deincrement</button>
				<button onClick={handleReset}>Reset</button>
			</div>

			<div>
				<strong>История (последние 5 значений):</strong>
				<ul>
					{lastFiveHistory.length > 0 ? (
						lastFiveHistory.map((value, index) => <li key={index}>{value}</li>)
					) : (
						<li>История пуста</li>
					)}
				</ul>
			</div>
		</div>
				)
};

export default StepCounter;