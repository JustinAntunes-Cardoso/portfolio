import ProjectList from '../ProjectList';
import './Projects.scss';
import { Project } from '../../utils/types';

interface ProjectsProps {
	projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
	//🍷🥂
	return <section id='projects' className='projects'>
		<div className='projects__title-container'>
			<h3 className='projects__title'>Portfolio</h3>
			<h1 className='projects__text'>Each Project is a Bespoke Piece of Work 💼</h1>
		</div>
		<ProjectList projects={projects} />
	</section>;
};

export default Projects;
