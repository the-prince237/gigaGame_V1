import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Carossel from '../../components/Carossel';
// import jeux1 from '../../utils/images/jeux1.jpg';
// import jeux2 from '../../utils/images/jeux2.jpg';
// import jeux3 from '../../utils/images/jeux3.jpg';
import homeGames from '../../utils/images/home-games.png';

const carosselHomeItems = [['Obtenez tous vos jeux favoris', ' sans connexion internet !'], ['Obtenez ici vos jeux favoris', ' sans payez  l\'internet !'], ['Prenez tous vos jeux favoris', ' sans avoir de connexion !']];

const HomeWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;;
  align-items: center;
  flex-wrap: wrap;
`;

const HomeLeftSide = styled.div`
  width: 35%;
  margin-left: 20px;
  margin-right: 20px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & .all-games{
    padding: 20px;
    color: white;
    font-weight: bold;
    background-color: black;
    font-size: x-large;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 50%;
  }
`

const HomeRightSide = styled.div`
  width: 55%;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &>.home-games{
    width: 100%;
    &>img{
      width: 100%;
    }
  }
`;

function Home() {

  return(
    <HomeWrapper>
      <HomeLeftSide>
        <Carossel className='home-carossel' carosselItems={carosselHomeItems}/>
        <Link to='/games' className='all-games'>tous les jeux</Link>
      </HomeLeftSide>
      <HomeRightSide>
        <div className='home-games'>
          {/* <img className='home-game' id='home-jeux1' src={jeux1} alt="jeux1" />
          <img className='home-game' id='home-jeux2' src={jeux2} alt="jeux2" />
          <img className='home-game' id='home-jeux3' src={jeux3} alt="jeux3" /> */}
          <img src={homeGames} alt="meilleurs jeux" />
        </div>
        <h1> Les plus demandés </h1>
      </HomeRightSide>
    </HomeWrapper>
  )
}

export default Home;