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
  align-items: center;
  font-weight: bold;
  &>img{
    width: 70px;
    margin-right: 15px;
  }
`

const HeaderNavigator = styled.nav`
  &>.header-link{
    margin-left: 50px;
    
  }
`

const StyledLink = styled(Link)`
  ${({isoponed}) => isoponed === 'yes' ?
    `
    background-color: #bd2727;
    padding: 30px;
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

      <FullLogo to='/'> <img src={fullLogo} alt='giga game'/> gigagame</FullLogo>
      <HeaderNavigator>
        <StyledLink className='header-link' to='/' isoponed={currentPage === 'accueil' ? 'yes' : 'no'} onClick={() => setCurrentPage('accueil')}>accueil</StyledLink>
        <StyledLink className='header-link' to='/games' isoponed={currentPage === 'games' ? 'yes' : 'no'} onClick={() => setCurrentPage('games')}>jeux</StyledLink>
        <StyledLink className='header-link' to='/connexion' isoponed={currentPage === 'connexion'? 'yes' : 'no'} onClick={() => setCurrentPage('connexion')}>connexion</StyledLink>
      </HeaderNavigator>
    </HeaderWrapper>
  );
}

export default Header;