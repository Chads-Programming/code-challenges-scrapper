import { z } from "zod";
import Chady from "../types/chady";
import { Markdown } from "@/packages/core/types";

const MarkdownSchema = z.string().transform((val) => val as Markdown);

export const createChallengeDto = z.object({
	title: z.string().max(30),
	description: MarkdownSchema,
	difficulty: z.nativeEnum(Chady.Difficulty),
});

export type CreateChallenge = z.infer<typeof createChallengeDto>;
