import { techStack } from './heroConstants';
import { about } from './aboutConstants';
import { badges } from './certificationsConstants';
import { projects } from './projectConstants';
import { Data } from '../types';

export const dev: Data = {
	data: {
		title: 'Full-Stack Software Developer',
		hero: {
			techStack: techStack,
		},
		about: about,
		certifications: {
			badges: badges,
		},
		projects: projects,
	},
};
