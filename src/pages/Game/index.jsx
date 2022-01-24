import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {gamesDatas} from '../../datas/gamesDatas';

const GameWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CurrentGame = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  &>img{
    width: 35%;
    min-width: 200px;
    border-radius: 10px;
    box-shadow: 0 0 5px black;
  }
  &>div{
    width: 45%;
    &>h1{
      font-size: 45px;
      color: #bd2727;
      text-shadow: 0 0 5px gray;
    }
    &>.game-description{
      font-size: x-large;
      font-weight: bold;
    }
  }
`

function Game(){
  const {gameId} = useParams();

  return(
    <GameWrapper>
      {gamesDatas.map((currentGame) => currentGame.id === gameId &&
        <CurrentGame key={currentGame.id}> 
          <img src={currentGame.cover} alt={`${currentGame.name}`}/>
          <div>
            <h1>{currentGame.name.toUpperCase()}</h1>
            <div className='game-description'>{currentGame.description}</div>
          </div>
        </CurrentGame>
      )}
    </GameWrapper>
  );
}

export default Game;