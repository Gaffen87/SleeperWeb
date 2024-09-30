import { db } from "../Services/Firebase";
import { collection, addDoc } from "firebase/firestore";

const leagueId = import.meta.env.VITE_LEAGUE_ID;

export const getRosters = async () => {
  const rosters = [];
  await fetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`)
    .then((response) => response.json())
    .then((data) => {
      data.map((roster) => {
        rosters.push({
          owner_id: roster.owner_id,
          players: roster.players,
          starters: roster.starters,
          taxi: roster.taxi,
          record: roster.metadata.record,
          streak: roster.metadata.streak,
          points: roster.settings.fpts,
        });
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return rosters;
};

export const getUsers = async () => {
  const users = [];
  await fetch(`https://api.sleeper.app/v1/league/${leagueId}/users`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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
