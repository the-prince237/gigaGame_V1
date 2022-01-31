import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import fullLogo from '../../utils/images/full-logo.png';

const HeaderWrapper = styled.div`
  padding: 10px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 5px black;
  box-shadow-opacity: 0.75;
`

const FullLogo = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  width: 25%;
  max-width: 150px;
  flex-wrap: wrap;
  &>img{
    width: 45%;
  }
`

const HeaderNavigator = styled.nav`
  display: flex;
  flex-wrap: wrap;
`

const StyledLink = styled(Link)`
  margin: 0 15px 0 15px;
  ${({isoponed}) => isoponed === 'yes' ?
    `
    color: #bd2727;
    font-weight: bold;
    border-radius: 50%;
    `:
    `
      background-color: none;
    `
    }
`

function Header() {
  const [currentPage, setCurrentPage] = useState('accueil');

  return(
    <HeaderWrapper>

      <FullLogo to='/'> <img src={fullLogo} alt='giga game'/> <p>gigagame</p> </FullLogo>
      <HeaderNavigator>
        <StyledLink className='header-link' to='/' isoponed={currentPage === 'accueil' ? 'yes' : 'no'} onClick={() => setCurrentPage('accueil')}>accueil</StyledLink>
        <StyledLink className='header-link' to='/games' isoponed={currentPage === 'games' ? 'yes' : 'no'} onClick={() => setCurrentPage('games')}>jeux</StyledLink>
        <StyledLink className='header-link' to='/connexion' isoponed={currentPage === 'connexion'? 'yes' : 'no'} onClick={() => setCurrentPage('connexion')}>connexion</StyledLink>
      </HeaderNavigator>
    </HeaderWrapper>
  );
}

export default Header;