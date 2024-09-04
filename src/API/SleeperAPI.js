export const getRosters = async (leagueId) => {
  fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getUsers = async (leagueId) => {
  fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
