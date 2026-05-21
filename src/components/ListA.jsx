import { useListofPlayers } from "../store/ListofPlayers.js";

export default function ListA() {
  const { players } = useListofPlayers();

  return (
    <div>
      <h1>
        {players.map((player) => (
          <li key={player}> {player} </li>
        ))}
      </h1>
    </div>
  );
}
