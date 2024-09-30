const sportsdataKey = import.meta.env.VITE_SPORTSDATA_KEY;

export const getStats = async (year, week) => {
  fetch(
    `https://api.sportsdata.io/v3/nfl/stats/json/FantasyGameStatsByWeek/${year}/${week}?key=${sportsdataKey}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
