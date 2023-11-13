import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectList.scss';
import { Project } from '../../utils/types';

interface ProjectsProps {
	projects: Project[];
}

const ProjectList: React.FC<ProjectsProps> = ({ projects }) => {
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
