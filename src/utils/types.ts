export interface TechStack {
	src: string;
	title: string;
}

export interface About {
	image: {
		src: string;
		alt: string;
	};
	text: string;
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

export interface Data {
	data: {
		title: string;
		hero: {
			techStack: TechStack[];
		};
		about: About;
		certifications: {
			badges: Badge[];
		};
		projects: Project[];
	};
}
