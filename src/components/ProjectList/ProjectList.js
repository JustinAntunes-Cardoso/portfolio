import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.scss';
import brainhive from '../../assets/images/brainhive-home.png';
import seba from '../../assets/images/seba-home.png';
import ktc from '../../assets/images/ktc-home.png';

//{image: '', title: '', text: '', stack: ['', ''], github: '', site: ''}
const projects = [
	{
		image: brainhive,
		title: 'BrainHive 🧠🐝',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in.',
		stack: ['React', 'SCSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
		github: 'https://github.com/JustinAntunes-Cardoso/brainhive',
		site: 'https://thebrainhive.com/',
	},
	{
		image: seba,
		title: 'SEBA 🏀🐶',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in.',
		stack: ['HTML', 'CSS', 'JavaScript', 'Database Modeling'],
		github: '',
		site: 'https://www.sebabasketball.ca/',
	},
	{
		image: ktc,
		title: 'Kitchener Therapy Collaborative 💬🤝',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		github: '',
		site: 'https://www.kitchenertherapycollaborative.com/',
	},
];

const ProjectList = () => {
	return (
		<article className='project-list'>
			{projects.map((project, index) => {
				return (
					<ProjectCard
						key={index}
						project={project}
						isReverse={index % 2 === 0 ? true : false}
					/>
				);
			})}
		</article>
	);
};

export default ProjectList;
