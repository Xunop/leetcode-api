const query = `query userProfileCalendar($userSlug: String!, $year: Int) {
  userCalendar(userSlug: $userSlug, year: $year) {
    streak
    totalActiveDays
    submissionCalendar
    activeYears
    monthlyMedals {
      name
      obtainDate
      category
      config {
        icon
        iconGif
        iconGifBackground
      }
      progress
      id
      year
      month
    }
    recentStreak
  }
}`;

module.exports = query;
