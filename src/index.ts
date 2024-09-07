import { getChallenges } from "@/packages/leetcode/utils";

async function main() {
	const challenges = await getChallenges({});
	console.log({ challenges });
}

main();
