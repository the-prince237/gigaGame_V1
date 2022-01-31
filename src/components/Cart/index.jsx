import { useContext, useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import EmptyCartWarning from '../../utils/images/emptyCartWarning.png';
import { CartContext } from '../../utils/context';

const CartWrapper = styled.div`
  width: 50%;
  max-width: 400px;
  min-width: 300px;
  position: absolute;
  left: 0;
  z-index: 1;
`
const OpenedCartWrapper = styled.div`
  margin-top: 7px;
  padding: 20px;
  padding-bottom: 50px;
  background-color: black;
  border-radius: 0 0 20px 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>.cart-header{
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &>.cart-empty_elements{
    margin: auto;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    &>.cart-warning_image{
      width: 40%;
    }
    &>.cart-add_button{
      margin-top: 50px;
      color: white;
      background-color: #bd2727;
      padding: 10px;
      border-radius: 50%;
      font-weight: bold;
    }
  }

  &>.cart-elements{
    &>.cart-items{
      &>div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
        &>div{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          &>.cart-item_puce{
            width: 5px;
            height: 5px;
            background-color: #bd2727;
            border-radius: 50%;
            margin-right: 5px;
          }
          &>.cart-remove_item{
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #bd2727;
            border-radius: 5px;
            margin-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
    &>.cart-total{
      margin-top: 40px;
      font-weight: bold;
    }
  }
`
const CloseCartButton = styled.div`
  color: #bd2727;
  cursor: pointer;
`

const ClosedCartWrapper = styled.div`
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
`

const ResetCartButton = styled.div`
  background-color: #bd3737;
  margin-top: 15px;
  padding: 3px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  &:hover{
    transform: scale(1.05);
  }
`

const StyledCommandButtom = styled.div`
border: solid #279927 2px;
color: #279927;
margin-top: 15px;
padding: 3px;
text-align: center;
font-weight: bold;
cursor: pointer;
border-radius: 4px;
&:hover{
  color: white;
  background-color: #279927;
  transform: scale(1.05);
}
`

function Cart() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const {cart, removeFromCart, resetCart} = useContext(CartContext);
  const cartTotalWeight = cart.reduce((acc, item) => 
    acc += item.weight, 0
  );

  return(
    <CartWrapper>
      {cartIsOpen ? 
        <OpenedCartWrapper>
          <div className='cart-header'>
            <div>panier</div>
            <CloseCartButton onClick={() => setCartIsOpen(false)}>close</CloseCartButton>
          </div>
          {(cart.length === 0) ?
          (<div className='cart-empty_elements'>
            <img className='cart-warning_image' src={EmptyCartWarning} alt="panier vide" />
            <Link to='/games' className='cart-add_button'>ajouter</Link>    
          </div>) :
          (
          <div className='cart-elements'>
            <div className='cart-items'>
              {cart.map((cartItem, index) => 
                <div key={`${cartItem}-${index}`}>
                  <div><div className='cart-item_puce'> </div>{cartItem.name} <span onClick={() => removeFromCart(cartItem)} className='cart-remove_item'>-</span></div>
                  <div>poids : {cartItem.weight}Gb</div>
                </div>
              )}
            </div>
            <div className='cart-total'>TOTAL : {cartTotalWeight}({cartTotalWeight*150}Fcfa)</div>
            <StyledCommandButtom>COMMANDER</StyledCommandButtom>
            <ResetCartButton onClick={() => resetCart()}>vider le panier</ResetCartButton>
          </div>
          )
          }
          
        </OpenedCartWrapper>
      :
        <ClosedCartWrapper>
          <div onClick={() => setCartIsOpen(true)}>panier</div>
        </ClosedCartWrapper>
      }
    </CartWrapper>
  );
}

export default Cart;