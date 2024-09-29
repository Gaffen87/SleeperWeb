import { db } from "../Services/Firebase";
import { collection, addDoc } from "firebase/firestore";

export const getRosters = async (leagueId) => {
  const rosters = [];
  await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
    .then((response) => response.json())
    .then((data) => {
      data.map((roster) => {
        rosters.push({
          owner_id: roster.owner_id,
          players: roster.players,
        });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return rosters;
};

export const getUsers = async (leagueId) => {
  const users = [];
  await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
    .then((response) => response.json())
    .then((data) => {
      data.map((user) => {
        users.push({ name: user.display_name, id: user.user_id });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return users;
};

export const populateDbWithPlayerData = async () => {
  await fetch("https://api.sleeper.app/v1/players/nfl")
    .then((response) => response.json())
    .then((data) => {
      Object.values(data).map(async (player) => {
        try {
          await addDoc(collection(db, "players"), {
            playerId: player.player_id,
            fullName: player.full_name,
            position: player.position,
            team: player.team,
            number: player.number,
            college: player.college,
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
