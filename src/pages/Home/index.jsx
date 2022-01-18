import styled from 'styled-components';
import {Link} from 'react-rooter-dom';
import Panier from '../components/Panier';
import Carossel from '../components/Carossel/index.jsx';

const HomeWrapper = styled.div`
`;

const HomeLeftSide = styled.div`
`;

const HomeRightSide = styled.div`
`;

function Home() {
  return(
    <HomeWrapper>
      <Panier />
      <HomeLeftSide>
        <Carossel />
        <Link to='/games'>Tous les jeux</Link>
      </HomeLeftSide>
      <HomeRightSide>
        <div>
          <img src="" alt="jeux1" />
          <img src="" alt="jeux2" />
          <img src="" alt="jeux3" />
        </div>
        <h2> Les plus demandés </h2>
      </HomeRightSide>
    </HomeWrapper>
  )
}

export default Home;