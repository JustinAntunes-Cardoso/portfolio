import './ProjectCard.scss';
import { Project } from '../../utils/types';

type ProjectCardProps = {
	project: Project;
	isReverse: boolean;
}

const ProjectCard = ({ project, isReverse }: ProjectCardProps) => {
	return (
		<div className={isReverse ? 'project-card reverse' : 'project-card'}>
			<div className='project-card__image-container'>
				<a
					target='_blank'
					href={project.site == '' ? project.github : project.site}
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
					{project.stack.map((tech, index) => {
						return <h4 key={index} className='project-card__stack'>{tech}</h4>;
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
					{project.site === '' ? (
						<></>
					) : (
						<a
							target='_blank'
							href={project.site}
							rel='noreferrer'>
							<h4 className='project-card__link'>Live Demo</h4>
							<i className='project-card__link fa-solid fa-arrow-up-right-from-square'></i>
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
