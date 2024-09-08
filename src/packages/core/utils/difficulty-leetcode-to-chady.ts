import Chady from "@/packages/chady/types/chady";
import Leetcode from "@/packages/leetcode/types/leetcode";

export const difficultyFromLeetcode = (
	difficulty: Leetcode.Difficulty,
): Chady.Difficulty => {
	switch (difficulty) {
		case "EASY":
			return Chady.Difficulty.EASY;
		case "MEDIUM":
			return Chady.Difficulty.MEDIUM;
		case "HARD":
			return Chady.Difficulty.HARD;
		default:
			return Chady.Difficulty.EASY;
	}
};
