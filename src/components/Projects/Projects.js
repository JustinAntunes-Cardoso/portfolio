import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import './Projects.scss';

const Projects = () => {
	return <section id='projects' className='projects'>
		<div className='projects__title-container'>
			<h3 className='projects__title'>Portfolio</h3>
			<h1 className='projects__text'>Each Project is a Bespoke Piece of Work 💼🥂</h1>
		</div>
		<ProjectList />
	</section>;
};

export default Projects;
