import styled from 'styled-components';
import GamesItem from '../../components/GamesItem';
import ResearchSection from '../../components/ResearchSection';
import { gamesDatas } from '../../datas/gamesDatas';

const GamesWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 100px;
`
const GamesListWrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

function Games(){

  return(
    <GamesWrapper>
      <ResearchSection/>
      <GamesListWrapper>
        {gamesDatas.map((game) =>
          <GamesItem key={game.id} game={game}/>
        )}
      </GamesListWrapper>
    </GamesWrapper>
  );
}

export default Games;