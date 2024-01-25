let query = `query recentAcSubmissions($userSlug: String!) {
  recentACSubmissions(userSlug: $userSlug) {
    submissionId
    submitTime
    question {
      title
      translatedTitle
      titleSlug
      questionFrontendId
    }
  }
}
`;

module.exports = query;
