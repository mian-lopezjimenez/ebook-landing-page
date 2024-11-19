interface Chapter {
	number: number;
	title: string;
	strapline: string;
	excerpt: string;
}

interface Faq {
	question: string;
	answer: string;
}

export type { Chapter, Faq };
