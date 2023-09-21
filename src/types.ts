export interface TechStack {
	src: string;
	title: string;
}

export interface Project {
	image: string;
	title: string;
	text: string;
	stack: string[];
	github: string;
	site: string;
}

export interface Badge {
	src: string;
	badgeId: string;
	badgeHost: string;
}
