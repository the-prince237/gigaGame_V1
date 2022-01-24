import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext, FavoritesContext } from '../../utils/context';

const StyledGameItem = styled.div`
  margin: 5px;
  box-shadow: 0 0 3px black;
  position: relative;
  width: 300px;
  min-width: 150px;
  height: 300px;
  min-height: 150px;
  border-radius: 10px;
  &:hover{
    box-shadow: 0px 0px 9px black;
  }
`

const StyledLink = styled(Link)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  filter: grayscale(70%);
  &:hover{
    filter: grayscale(0%);
  }
  &>img{
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  &>.title{
    position: absolute;
    width: 100%;
    height: 89%;
    opacity:0;
    &:hover{
      opacity: 0.8;
    }
    &>h3{
      background-color: black;
      color: white;
      border-radius: 10px 10px 0 0;
      padding-top: 5%;
      padding-bottom: 5%;
      text-align: center;
    }
  }
`

const StyledSubBar = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: black;
  color: #aa3333;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  opacity: 0.8;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>div{
    margin: 0 10px 0 10px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &>.item-remove_button{
    border: solid 2px #bd2727;
  }
  &>.item-add_button{
    background-color: #bd2727;
    color: white;
  }
`

function GamesItem({game}){

  const {cart, addToCart, removeFromCart} = useContext(CartContext);
  const {favorites, addToFavorites, removeFromFavorites} = useContext(FavoritesContext);

  return(
    <StyledGameItem>
      <StyledLink className='game-link' to={`/game/${game.id}`}>
        <div className='title'><h3>{game.name.toUpperCase()}</h3></div>
        <img src={game.cover} alt="" />
      </StyledLink>
      
      <StyledSubBar>
        {cart.includes(game) ? <div className='item-remove_button' onClick={() => removeFromCart(game)}>-</div> : <div className='item-add_button' onClick={() => addToCart(game)}>+</div>}
        {favorites.includes(game) ? <div className='item-love_button' onClick={()=>removeFromFavorites(game)}>dislove</div> : <div className='item-love_button' onClick={()=>addToFavorites(game)}>love</div>}
      </StyledSubBar>
    </StyledGameItem>
  );
}

export default GamesItem;