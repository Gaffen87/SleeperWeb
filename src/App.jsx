import { useEffect, useState } from "react";
import { getRosters, getUsers } from "./API/SleeperAPI";
import Player from "./Components/Player";

function App() {
  const [users, setUsers] = useState(null);
  const [rosters, setRosters] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const retrievedUsers = await getUsers("1048187545894436864");
      const retrievedRosters = await getRosters("1048187545894436864");
      setUsers(retrievedUsers);
      setRosters(retrievedRosters);
    };
    if (!users && !rosters) {
      fetch();
    }
  }, [rosters, users]);

  return (
    <div className="bg-bluegray_dark grid gap-5 px-10 py-5 md:grid-cols-2">
      {users ? (
        users.map((user, index) => {
          const roster = rosters.find((roster) => roster.owner_id === user.id);
          return (
            <div
              key={index}
              className="bg-bluegray rounded-3xl border border-[#3a465b] pb-6 shadow-md"
            >
              <p className="my-5 text-center text-2xl font-bold text-black">
                {user.name}
              </p>
              <div className="flex">
                <p className="ml-10 font-bold">PLAYERS</p>
                <p className="ml-auto mr-6 text-xs">PTS</p>
                <p className="mr-9 text-xs">SEASON PTS</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                {roster ? (
                  roster.players.map((player, index) => {
                    return <Player playerid={player} key={index} />;
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
