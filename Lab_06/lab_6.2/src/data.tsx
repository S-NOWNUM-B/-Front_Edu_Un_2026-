export interface Course {
	id: number;
	title: string;
	description: string;
}

export const courses: Course[] = [
	{
		id: 1,
		title: 'React Basics',
		description: 'Learn the fundamentals of React, including components, state, and props.',
	},
	{
		id: 2,
		title: 'Advanced React',
		description: 'Dive deeper into React with hooks, context, and performance optimization.',
	},
	{
		id: 3,
		title: 'TypeScript with React',
		description: 'Learn how to use TypeScript to enhance your React applications.',
	},
];

export const getCourseById = (id: number): Course | undefined => {
	return courses.find(course => course.id === id);
}