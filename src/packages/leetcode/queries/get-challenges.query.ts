export const GET_CHALLENGES_GQL = `
  query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
    problemsetQuestionList: questionList(
      categorySlug: $categorySlug
      limit: $limit
      skip: $skip
      filters: $filters
    ) {
      total: totalNum
      questions: data {
        codeSnippets{
          code
          lang
          langSlug
        }
        exampleTestcaseList
        content
        acRate
        difficulty
        freqBar
        frontendQuestionId: questionFrontendId
        isFavor
        paidOnly: isPaidOnly
        status
        title
        titleSlug
        hasSolution
        hasVideoSolution
        topicTags {
          name
          id
          slug
        }
    }
  }
}`;
