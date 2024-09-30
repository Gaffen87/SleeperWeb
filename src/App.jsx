import { useEffect, useState } from "react";
import { getRosters, getUsers } from "./API/SleeperAPI";
import { getStats } from "./API/SportsDataAPI";
import Roster from "./Components/Roster";

function App() {
  const [users, setUsers] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (!rosters) {
        const retrievedRosters = await getRosters();
        setRosters(retrievedRosters);
      }
      if (!users) {
        const retrievedUsers = await getUsers();
        setUsers(retrievedUsers);
      }
      if (!stats) {
        const stats = await getStats(2024, 4);
        setStats(stats);
      }
    };
    fetch();
  }, []);

  return (
    <div className="grid gap-5 bg-bluegray_dark px-10 py-5 md:grid-cols-2 xl:grid-cols-3">
      {users ? (
        users.map((user, index) => {
          const roster = rosters.find((roster) => roster.owner_id === user.id);
          return <Roster user={user} roster={roster} key={index} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
