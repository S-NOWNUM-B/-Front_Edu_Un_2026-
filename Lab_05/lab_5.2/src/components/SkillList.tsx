import type { Skill } from '../types.tsx';

interface SkillListProps {
	skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
	return (
		<ul>
			{skills.map((skill) => (
				<li key={skill.id}>
					<strong>{skill.name}</strong> - 
					<span style={{
						marginLeft: '10px',
						padding: '2px 8px',
						borderRadius: '4px',
						backgroundColor:
						skill.level === 'Advanced' ? '#4caf50' :
						skill.level === 'Intermediate' ? '#ff9800' :
						'#f44336',
						color: '#fff',
						fontSize: '12px',
					}}>
						{skill.level}
					</span>
				</li>
			))}
		</ul>
	);
};

export default SkillList;