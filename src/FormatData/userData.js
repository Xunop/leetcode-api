exports.formatUserData = (data) => {
    return {
        username: data.userProfilePublicProfile.profile.userSlug,
        name: data.userProfilePublicProfile.profile.realName,
        avatar: data.userProfilePublicProfile.profile.userAvatar,
        ranking: data.userProfilePublicProfile.siteRanking,
        gitHub: data.userProfilePublicProfile.profile.github,
        website: data.userProfilePublicProfile.profile.socialAccounts,
        country: data.userProfilePublicProfile.profile.globalLocation.country,
        company: data.userProfilePublicProfile.profile.company,
        school: data.userProfilePublicProfile.profile.school.name,
        skillTags: data.userProfilePublicProfile.profile.skillTags,
        about: data.userProfilePublicProfile.profile.aboutMe,
    };
}

exports.formatBadgesData = (data) => {
    return {
        badgesCount: data.matchedUser.badges.length,
        badges: data.matchedUser.badges,
        upcomingBadges: data.matchedUser.upcomingBadges,
        activeBadge: data.matchedUser.activeBadge,
    };
}
exports.formatContestData = (data) => {
    return {
        contestAttend: data.userContestRanking.attendedContestsCount,
        contestRating: data.userContestRanking.rating,
        contestGlobalRanking: data.userContestRanking.globalRanking,
        totalParticipants: data.userContestRanking.totalParticipants,
        contestTopPercentage: data.userContestRanking.topPercentage,
        contestBadges: data.userContestRanking.badge,
        contestParticipation: data.userContestRankingHistory.filter(obj => obj.attended === true),
    };
}
exports.formatContestHistoryData = (data) => {
    return {
        count: data.userContestRankingHistory.length,
        contestHistory: data.userContestRankingHistory,
    };
}
exports.formatSolvedProblemsData = (data) => {
    return {
        solvedProblem: data.matchedUser.submitStats.acSubmissionNum[0].count,
        easySolved: data.matchedUser.submitStats.acSubmissionNum[1].count,
        mediumSolved: data.matchedUser.submitStats.acSubmissionNum[2].count,
        hardSolved: data.matchedUser.submitStats.acSubmissionNum[3].count,
        totalSubmissionNum: data.matchedUser.submitStats.totalSubmissionNum,
        acSubmissionNum: data.matchedUser.submitStats.acSubmissionNum,

    };
}
exports.formatQuestionData = (data) => {
    return {
        acceptedQuestion: data.userProfileUserQuestionProgress.numAcceptedQuestions
    };
}
exports.formatSubmissionData = (data) => {
    return {
        count: data.recentACSubmissions.length,
        submission: data.recentACSubmissions,
    };
}
exports.formatSubmissionCalendarData = (data) => {
    return {
        submissionCalendar: data.userCalendar.submissionCalendar,
    };
}
exports.formatUserLanguageData = (data) => {
    return {
        userLanguageProblemCount: data.userLanguageProblemCount,
    };
}
