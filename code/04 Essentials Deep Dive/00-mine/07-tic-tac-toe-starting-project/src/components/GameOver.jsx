export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2></h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
}
