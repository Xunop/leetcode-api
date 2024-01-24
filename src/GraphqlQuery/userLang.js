const query = `query languageStats($userSlug: String!) {
  userLanguageProblemCount(userSlug: $userSlug) {
    languageName
    problemsSolved
  }
}`;

module.exports = query;
