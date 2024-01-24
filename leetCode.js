const userProfileQuery = require("./src/GraphqlQuery/userProfile");
const userLangQuery = require("./src/GraphqlQuery/userLang");
const userQuestionProgressQuery = require("./src/GraphqlQuery/userQuestionProgress");
const contestQuery = require("./src/GraphqlQuery/contest");
const dailyQuery = require("./src/GraphqlQuery/dailyProblem");
const selectProblemQuery = require("./src/GraphqlQuery/selectProblem");
const submissionQuery = require("./src/GraphqlQuery/recentSubmit");
const problemsQuery = require("./src/GraphqlQuery/problemList");

const userDetailsFetch = require("./src/API/userDetails");
const nojGoFetch = require("./src/API/nojGo");
const problemFetch = require("./src/API/problem");
const problemsFetch = require("./src/API/problems");

const userData = require("./src/FormatData/userData")
const problemData = require("./src/FormatData/problemData");

// CN
exports.userData = (req, res) => {
    userDetailsFetch(req, res, userData.formatUserData, userProfileQuery);
};
// CN
exports.UserLanguage = (req, res) => {
    nojGoFetch(req, res, userData.formatUserLanguageData, userLangQuery);
};
exports.userBadges = (req, res) => {
    userDetailsFetch(req, res, userData.formatBadgesData, userProfileQuery);
};
exports.userContest = (req, res) => {
    userDetailsFetch(req, res, userData.formatContestData, contestQuery);
};
exports.userContestHistory = (req, res) => {
    userDetailsFetch(req, res, userData.formatContestHistoryData, contestQuery);
};
// CN
exports.solvedProblem = (req, res) => {
    userDetailsFetch(req, res, userData.formatQuestionData, userQuestionProgressQuery);
};
exports.submission = (req, res) => {
    userDetailsFetch(req, res, userData.formatSubmissionData, submissionQuery);
};
exports.calendar = (req, res) => {
    userDetailsFetch(req, res, userData.formatSubmissionCalendarData, userProfileQuery);
};
// CN
exports.dailyProblem = (req, res) => {
    problemFetch(res, problemData.formatDailyData, dailyQuery, null);
};
exports.selectProblem = (req, res) => {
    let title = req.query.titleSlug;
    if (title !== undefined) {
        problemFetch(res, problemData.formatQuestionData, selectProblemQuery, title);
    } else {
        res.status(400).json({
            error: "Missing or invalid query parameter: titleSlug",
            solution: "put query after select",
            example: "localhost:3000/select?titleSlug=two-sum",
        })
    }
};
exports.problems = (req, res) => {
    problemsFetch(req, res, problemData.formatProblemsData, problemsQuery);
}

