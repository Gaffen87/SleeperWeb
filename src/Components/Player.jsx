import { useEffect, useState } from "react";
import { getPlayerById } from "../Services/Firebase";

const Player = ({ playerid }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const playerData = await getPlayerById(playerid);
      setPlayer(playerData);
    }
    getPlayer();
  }, [playerid]);

  if (player) {
    return (
      <div className="border-black flex w-full cursor-pointer bg-bluegray_light px-10 py-2">
        <div className="basis-1/6">
          <img
            src="https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/izkm5yyxybb5uy5dkcgf"
            className="w-15 h-10"
          />
        </div>
        <div className="ml-2 basis-1/2 overflow-hidden">
          <p className="overflow-hidden text-ellipsis text-nowrap font-bold">
            {player.fullName}
          </p>
          <div className="flex space-x-2 text-xs">
            <p>{player.position}</p>
            <p>-</p>
            <p>{player.team}</p>
          </div>
        </div>
        <div className="my-auto ml-auto mr-5 flex font-mono font-bold">
          <p className="mr-10">22.5</p>
          <p>88</p>
        </div>
      </div>
    );
  }

  return <DefaultPlayer />;
};

export default Player;

function DefaultPlayer() {
  const defaultPlayers = [
    // Quarterbacks (QB)
    {
      fullName: "John Doe-Smith-Njigba-Metcalf-Lockett",
      position: "QB",
      team: "Team A",
      number: "12",
    },
    {
      fullName: "Jane Smith",
      position: "QB",
      team: "Team B",
      number: "7",
    },

    // Running Backs (RB)
    {
      fullName: "Mike Johnson",
      position: "RB",
      team: "Team C",
      number: "22",
    },
    {
      fullName: "Chris Williams",
      position: "RB",
      team: "Team D",
      number: "28",
    },
    {
      fullName: "Robert Brown",
      position: "RB",
      team: "Team E",
      number: "33",
    },
    {
      fullName: "David Davis",
      position: "RB",
      team: "Team F",
      number: "21",
    },
    {
      fullName: "James Miller",
      position: "RB",
      team: "Team G",
      number: "26",
    },

    // Wide Receivers (WR)
    {
      fullName: "William Garcia",
      position: "WR",
      team: "Team H",
      number: "80",
    },
    {
      fullName: "Matthew Martinez",
      position: "WR",
      team: "Team I",
      number: "88",
    },
    {
      fullName: "Thomas Wilson",
      position: "WR",
      team: "Team J",
      number: "85",
    },
    {
      fullName: "Joseph Anderson",
      position: "WR",
      team: "Team K",
      number: "82",
    },
    {
      fullName: "Charles Thomas",
      position: "WR",
      team: "Team L",
      number: "81",
    },
    {
      fullName: "Daniel Hernandez",
      position: "WR",
      team: "Team M",
      number: "84",
    },
    {
      fullName: "Matthew Clark",
      position: "WR",
      team: "Team N",
      number: "89",
    },
    {
      fullName: "Richard Lewis",
      position: "WR",
      team: "Team O",
      number: "83",
    },

    // Tight Ends (TE)
    {
      fullName: "George Robinson",
      position: "TE",
      team: "Team P",
      number: "87",
    },
    {
      fullName: "Brian Walker",
      position: "TE",
      team: "Team Q",
      number: "86",
    },
    {
      fullName: "Kevin Scott",
      position: "TE",
      team: "Team R",
      number: "81",
    },
  ];

  const randomPlayer =
    defaultPlayers[Math.floor(Math.random() * defaultPlayers.length)];

  return (
    <div className="border-black flex w-full cursor-pointer bg-bluegray_light px-10 py-2">
      <div className="basis-1/6">
        <img
          src="https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/izkm5yyxybb5uy5dkcgf"
          className="w-15 h-10"
        />
      </div>
      <div className="ml-2 basis-1/2 overflow-hidden">
        <p className="overflow-hidden text-ellipsis text-nowrap font-bold">
          {randomPlayer.fullName}
        </p>
        <div className="flex space-x-2 text-xs">
          <p>{randomPlayer.position}</p>
          <p>-</p>
          <p>{randomPlayer.team}</p>
        </div>
      </div>
      <div className="my-auto ml-auto mr-5 flex font-mono font-bold">
        <p className="mr-10">22.5</p>
        <p>88</p>
      </div>
    </div>
  );
}
