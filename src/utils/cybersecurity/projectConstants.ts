import { Project } from '../types';

import desk from '../../assets/images/Google Desk.png';
import toyShop from '../../assets/images/toy shop.jpg';
import sudokool from '../../assets/images/sudokool.png';

//{image: '', title: '', text: '', stack: ['', ''], github: '', site: ''}
export const projectsCyber: Project[] = [
	{
		image: desk,
		title: 'Desk 🖥️📎',
		text: 'Discover the Sudokool app - your go-to destination for endless Sudoku fun. Enjoy endless puzzles, and a friendly interface for an addictive solving experience.',
		stack: ['Python', 'AWS', 'Linux', 'JavaScript'],
		github: 'https://github.com/JustinAntunes-Cardoso/sudokool',
		site: '',
	},
	{
		image: toyShop,
		title: 'Toy Shop 🧸🎠',
		text: 'Explore a cutting-edge cybersecurity audit for Botium Toys, the U.S. toy powerhouse. Amplifying security for their expanding online footprint, this audit is a thrilling journey into fortified resilience and heightened IT support.',
		stack: [
			'NIST CSF',
			'Cybersecurity Audit',
			'Risk Assessment',
			'Security Controls',
		],
		github:
			'https://github.com/JustinAntunes-Cardoso/Botium-Toys-Security-Audit',
		site: '',
	},
	{
		image: sudokool,
		title: 'Sudokool 🧩✏️',
		text: 'Discover the Sudokool app - your go-to destination for endless Sudoku fun. Enjoy endless puzzles, and a friendly interface for an addictive solving experience.',
		stack: ['Python', 'AWS', 'Linux', 'JavaScript'],
		github: 'https://github.com/JustinAntunes-Cardoso/sudokool',
		site: 'https://sudokool.vercel.app/',
	},
];
