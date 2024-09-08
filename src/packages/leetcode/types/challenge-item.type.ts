export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface ChallengeItem {
	codeSnippets: CodeSnippet[];
	exampleTestcaseList: string[];
	acRate: number;
	difficulty: Difficulty;
	freqBar: any;
	content: string;
	frontendQuestionId: string;
	isFavor: boolean;
	paidOnly: boolean;
	status: any;
	title: string;
	titleSlug: string;
	topicTags: TopicTag[];
	hasSolution: boolean;
	hasVideoSolution: boolean;
}

export interface CodeSnippet {
	code: string;
	lang: string;
	langSlug: string;
}

export interface TopicTag {
	name: string;
	id: string;
	slug: string;
}
