import { z } from "zod";
import Chady from "../types/chady";

export const createChallengeDto = z.object({
	title: z.string().max(30),
	description: z.string(),
	difficulty: z.nativeEnum(Chady.Difficulty),
});

export type CreateChallenge = z.infer<typeof createChallengeDto>;
