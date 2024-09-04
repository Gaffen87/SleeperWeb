import { getRosters, getUsers } from "./API/SleeperAPI";

function App() {
  getRosters("1048187545894436864");
  getUsers("1048187545894436864");

  return (
    <>
      <h1>Hej</h1>
    </>
  );
}

export default App;
