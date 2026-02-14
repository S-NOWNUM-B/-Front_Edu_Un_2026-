export interface User {
	name: string;
	email: string;
	age: number;
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Skill {
	id: number;
	name: string;
	level: SkillLevel;
}