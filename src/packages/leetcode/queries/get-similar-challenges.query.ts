export const GET_SIMILAR_CHALLENGES_GQL = `
  query SimilarQuestions($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      similarQuestionList {
        difficulty
        titleSlug
        title
        translatedTitle
        isPaidOnly    
      }
  }
`;
