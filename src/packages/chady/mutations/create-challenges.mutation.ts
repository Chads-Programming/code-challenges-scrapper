export const CREATE_CHALLENGE_MUTATION = `
  mutation createChallenge($data:CreateCodeChallengeInput!){
  createCodeChallenge(newCodeChallenge:$data){
    id
  }
}
`;
