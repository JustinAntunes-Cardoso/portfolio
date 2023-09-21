import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.scss';
import { projects } from '../../utils/constants';

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
