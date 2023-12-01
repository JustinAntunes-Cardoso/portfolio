import { Project } from '../types';

import sudokool from '../../assets/images/sudokool.png';
import worldMap from '../../assets/images/world_map.png';
import healthCare from '../../assets/images/healthcare.jpg';
import dataCentre from '../../assets/images/data-centre.jpg';
import techOffice from '../../assets/images/tech-office.jpg';
import multiMedia from '../../assets/images/Google Desk.png';
import toyShop from '../../assets/images/toy shop.jpg';

//{image: '', title: '', text: '', stack: ['', ''], github: '', site: ''}
export const projectsCyber: Project[] = [
	{
		image: sudokool,
		title: 'Sudokool 🧩✏️',
		text: 'Discover the Sudokool app - your go-to destination for endless Sudoku fun. Enjoy endless puzzles, and a friendly interface for an addictive solving experience.',
		stack: ['Python', 'JavaScript', 'Linux', 'AWS'],
		github: 'https://github.com/JustinAntunes-Cardoso/sudokool_api',
		site: 'https://sudokool.vercel.app/',
	},
	{
		image: worldMap,
		title: 'RDP Brutefore Attacks 🌎⚔️',
		text: 'Exploring Azure: Creating a Windows VM Honeypot, Disabling Firewall, Luring Attackers, Gathering RDP Logs with PowerShell, and Visualizing Worldwide Attacks in Sentinel',
		stack: ['Microsoft Sentinel', 'Azure', 'Windows', 'PowerShell', 'KQL'],
		github: 'https://github.com/JustinAntunes-Cardoso/Honeypot-Azure-Sentinel',
		site: '',
	},
	{
		image: healthCare,
		title: 'Healthcare Hiccups - Ransomware Saga 🏥💸',
		text: "In the wake of a ruthless ransomware attack, a U.S. healthcare clinic's vital files were encrypted by malicious actors using targeted phishing emails. Explore the aftermath and resilient response as the clinic's operations faced a critical standstill.",
		stack: ['Wireshark', 'Tcpdump', 'Incident Response', 'NIST SP 800-61'],
		github:
			'https://github.com/JustinAntunes-Cardoso/Healthcare-Incident-Journal',
		site: '',
	},
	{
		image: techOffice,
		title: 'Linux File Permissions Security Symphony 🖥️🔐',
		text: 'Revolutionizing file permissions within the organizational tapestry, this project meticulously refines access levels for the research team. Leveraging Linux commands, it fortifies system security and aligns with authorization mandates.',
		stack: ['Linux', 'Bash', 'IAM'],
		github: 'https://github.com/JustinAntunes-Cardoso/Linux-Permissions',
		site: '',
	},
	{
		image: multiMedia,
		title: 'Multimedia Company DDoS Attack 🌐⚠️',
		text: 'Unveil the heroic defense against a relentless DDoS assault on a multimedia company. This report unveils the analysis, response, and prevention strategies, showcasing our triumph over adversity.',
		stack: ['NIST CSF', 'Incident Response', 'Network Security'],
		github:
			'https://github.com/JustinAntunes-Cardoso/Multimedia-Incident-Report/',
		site: '',
	},
	{
		image: toyShop,
		title: 'Toy Shop Security Audit 🧸🎠',
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
		image: dataCentre,
		title: 'SQL Sentinel 🛡️🔍',
		text: "Explore SQL Sentinel's data-driven security. Discover how SQL filters fortify defenses, analyzing login attempts and employee machines with precision. Dive into the SQL realm to witness the synergy of code and security for a robust defense.",
		stack: ['SQL', 'Linux', 'NIST CSF', 'Vulnerability Management'],
		github: 'https://github.com/JustinAntunes-Cardoso/SQL-Security-Filters',
		site: '',
	},
];
