export const getStats = async (year, week) => {
  fetch(
    `https://api.sportsdata.io/v3/nfl/stats/json/FantasyGameStatsByWeek/${year}/${week}?key=620dcf58a921430e9b27a8ccf2ed85d9`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};