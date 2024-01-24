exports.formatDailyData = (data) => {
    console.log(data.todayRecord);
    return {
        questionLink: `https://leetcode.cn/problems/` + data.todayRecord[0].question.titleSlug,
        date: data.todayRecord[0].date,
        questionId: data.todayRecord[0].question.questionId,
        questionFrontendId: data.todayRecord[0].question.questionFrontendId,
        questionTitle: data.todayRecord[0].question.title,
        titleCn: data.todayRecord[0].question.titleCn,
        titleSlug: data.todayRecord[0].question.titleSlug,
        difficulty: data.todayRecord[0].question.difficulty,
        isPaidOnly: data.todayRecord[0].question.paidOnly,
        topicTags: data.todayRecord[0].question.topicTags,
        hints: data.todayRecord[0].question.hints,
        solutionNum: data.todayRecord[0].question.solutionNum,
        hasVideoSolution: data.todayRecord[0].question.hasVideoSolution,
        companyTagStats: data.todayRecord[0].question.extra.companyTagStats,
    };
};

exports.formatQuestionData = (data) => {
    return {
        link: `https://leetcode.cn/problems/` + data.question.titleSlug,
        questionId: data.question.questionId,
        questionFrontendId: data.question.questionFrontendId,
        questionTitle: data.question.title,
        titleSlug: data.question.titleSlug,
        difficulty: data.question.difficulty,
        isPaidOnly: data.question.isPaidOnly,
        question: data.question.content,
        exampleTestcases: data.question.exampleTestcases,
        topicTags: data.question.topicTags,
        hints: data.question.hints,
        solution: data.question.solution,
        companyTagStats: data.question.companyTagStats,
        likes: data.question.likes,
        dislikes: data.question.dislikes,
        similarQuestions: data.question.similarQuestions,
    }
}
exports.formatProblemsData = (data) => {
    return {
        totalQuestions: data.problemsetQuestionList.total,
        count: data.problemsetQuestionList.questions.length,
        problemsetQuestionList: data.problemsetQuestionList.questions,
    }
}
