import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import google from '../../utils/images/google-icon.png';

const InscriptionWrapper = styled.div`
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 98%;
`
const InscriptionPart = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`

const InscriptionMessage = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &>h1{
    font-size: 65px;
  }
  &>.connexion-link{
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

const InscriptionForm = styled.div`
  box-shadow: 0 0 5px black;
  width: 40%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  background-color: white;
  font-weight: bold;
  &>h1{
    margin-top: 25px;
    text-decoration: underline;
    margin-bottom: 40px;
    width: 98%;
    text-align: center;
  }
  &>form{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &>input{
      width: 90%;
      height: 50px;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 30px;
      box-shadow: 0 0 10px gray;
      padding-right: 5%;
      padding-left: 5%;
      font-weight: bold;
      font-size: large;
      text-decoration: underline;
      &[type='submit']{
        width: 100%;
        text-decoration: none;
      }
    }
    margin-bottom: 5px;
  }
  &>.connexion-link{
    width: 90%;
    text-align: right;
    margin-bottom: 20px;
  }
  &>.Inscription-autre{
    cursor: pointer;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    &>img{
      width: 50px;
      border-radius: 50%;
      border: solid black 3px;
      margin-right: 10px;
    }
    margin-bottom: 25px;
  }
`
const Or = styled.div`
  display: flex;
  width: 98%;
  justify-content: space-evenly;
  align-items: center;
  &>hr{
    width: 40%;
    height: 0px;
  }
  margin-bottom: 25px;
`

const RedText = styled.span`
  color: #bd2727;
`


function Inscription(){

  const [isGoogleMode, setGoogleMode] = useState(false);

  return(
    <InscriptionWrapper>
      <InscriptionPart>
        <InscriptionMessage>
          <h1>Rejoignez notre vaste communauté de gamers <RedText>237</RedText></h1>
          <Link className='connexion-link' to='/connexion'>se connecter</Link>
        </InscriptionMessage>
        {isGoogleMode ?
          <InscriptionForm>
            <h1>inscription via google</h1>
            <form action="">
              <input type="email" placeholder='adresse Gmail' required/>
              <input type="submit" name="" id="" />
            </form>
            <Or><hr/> ou <hr/></Or>
            <div className="Inscription-autre" onClick={() => setGoogleMode(false)}>
              <img src="" alt="email" /> e-mail
            </div>
          </InscriptionForm> :
          <InscriptionForm>
            <h1>inscription</h1>
            <form action="">
              <input type="text" placeholder='prénom' required/>
              <input type="text" placeholder='nom' required/>
              <input type="email" placeholder='adresse email' required/>
              <input type="password" placeholder='mot de passe' required/>
              <input type="submit" name="" id="" />
            </form>
            <Or><hr/> ou <hr/></Or>
            <div className='Inscription-autre' onClick={() => setGoogleMode(true)}>
              <img src={google} alt="google" /> google
            </div>
          </InscriptionForm>  
        }
        
      </InscriptionPart>
      
    </InscriptionWrapper>
  )
}

export default Inscription;