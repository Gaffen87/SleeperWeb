import Player from "./Player";

// todo: sorter spillere efter position, og så efter points
//				vi startere først og derefter bench og så taxi
const Roster = ({ user, roster }) => {
  return (
    <div className="rounded-3xl border border-[#3a465b] bg-bluegray pb-6 shadow-md">
      <p className="text-black my-5 text-center text-2xl font-bold">
        {user.name}
      </p>
      <div className="flex">
        <p className="ml-10 font-bold">PLAYERS</p>
        <p className="ml-auto mr-6 text-xs">PTS</p>
        <p className="mr-9 text-xs">SEASON PTS</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1">
        {roster ? (
          roster.starters.map((player, index) => {
            return <Player playerid={player} key={index} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Roster;
