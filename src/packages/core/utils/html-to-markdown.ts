import { HTML, Markdown } from "../types";
import TurndownService from "turndown";

const turndownService = new TurndownService();

export const htmlToMarkdown = (html: HTML): Markdown =>
	turndownService.turndown(html) as Markdown;
