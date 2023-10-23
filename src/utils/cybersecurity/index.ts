import { techStackCyber } from './heroConstants';
import { aboutCyber } from './aboutConstants';
import { badgesCyber } from './certificationsConstants';
import { projectsCyber } from './projectConstants';
import { Data } from '../types';

export const cyber: Data = {
	data: {
		title: 'Cybersecurity Analyst',
		hero: {
			techStack: techStackCyber,
		},
		about: aboutCyber,
		certifications: {
			badges: badgesCyber,
		},
		projects: projectsCyber,
	},
};
