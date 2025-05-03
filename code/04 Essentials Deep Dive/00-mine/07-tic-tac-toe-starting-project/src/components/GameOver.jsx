export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2></h2>
      <p>{Winner} won!</p>
      <button>Rematch!</button>
    </div>
  );
}
