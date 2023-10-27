import Player from "./Player";
import players from "./players";


const PlayersList = () => {
    const myStyle = {
        display: 'flex'
    }
  return (
    <div style={myStyle}>
        {players.map((player, index) => (
            <Player
            key={index}
            nom={player.nom}
            equipe={player.equipe}
            nationalite={player.nationalite}
            url={player.url}
            age={player.age}
            number={player.number}
          />
        ))}


      
    </div>
  );
};

export default PlayersList;
