import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, isReverse }) => {
	return (
		<div className='project-card'>
			<div className='project-card__image-container'>
				<a
					target='_blank'
					href={project.site}
					rel='noreferrer'>
					<img
						className='project-card__image'
						src={project.image}
						alt='Website Preview'
					/>
				</a>
			</div>
			<div className='project-card__info-container'>
				<h3 className='project-card__title'>{project.title}</h3>
				<p className='project-card__text'>{project.text}</p>
				<div className='project-card__stack-container'>
					{project.stack.map((tech) => {
						return <h4 className='project-card__stack'>{tech}</h4>;
					})}
				</div>
				<div className='project-card__link-container'>
					{project.github === '' ? (
						<></>
					) : (
						<a
							target='_blank'
							href={project.github}
							rel='noreferrer'>
							<h4 className='project-card__link'>Code</h4>
							<i className='project-card__link fa-brands fa-github'></i>
						</a>
					)}
					<a
						target='_blank'
						href={project.site}
						rel='noreferrer'>
						<h4 className='project-card__link'>Live Demo</h4>
						<i className='project-card__link fa-solid fa-arrow-up-right-from-square'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
