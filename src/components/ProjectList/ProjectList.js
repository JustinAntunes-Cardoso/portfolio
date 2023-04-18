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
		text: "A spelling bee application which is the perfect tool for students & language enthusiasts to improve their spelling skills. With a fun, interactive interface and thousands of words users can practice from, this application is designed to make spelling fun & easy.",
		stack: ['React', 'SCSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
		github: 'https://github.com/JustinAntunes-Cardoso/brainhive',
		site: 'https://thebrainhive.com/',
	},
	{
		image: seba,
		title: 'SEBA 🏀🐶',
		text: 'The website for the basketball rep team not only facilitates user registration but also keeps them informed with all things SEBA. With an intuitive interface, users can seamlessly receive notifications for upcoming events, purchase team merchandise, and stay up-to-date with the latest team schedule.',
		stack: ['HTML', 'CSS', 'JavaScript', 'Database Modeling'],
		github: '',
		site: 'https://www.sebabasketball.ca/',
	},
	{
		image: ktc,
		title: 'Kitchener Therapy Collaborative 💬🤝',
		text: 'The therapy clinic website serves as a one-stop destination for individuals seeking mental health services. With a user-friendly interface, the website offers a range of resources and tools that allow users to contact the therapist for appointment booking, access therapeutic materials, and stay informed about the latest news and events. This website offers a comprehensive and convenient way for users to access high-quality mental health services and resources. ',
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
						isReverse={index % 2 !== 0 ? true : false}
					/>
				);
			})}
		</article>
	);
};

export default ProjectList;
