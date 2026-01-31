import React from 'react';
import StepCounter from './StepCounter';

const CounterApp: React.FC = () => {
	return (
		<div>
			<h2>Lab_3.1</h2>
			<StepCounter initialValue={0} step={1} />
			<StepCounter initialValue={10} step={5} />
		</div>
	);
};

export default CounterApp;