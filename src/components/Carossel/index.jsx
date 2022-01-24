import { useState } from "react";
import styled from 'styled-components';
import Proptypes from 'prop-types';

const CarosselWrapper = styled.div`
  font-size: 45px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  &>div>span{
    color: #bd2727;
  }
`

const CarosselNavigators = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`

const CarosselNavigator = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  ${({isActive}) => isActive ?
    `
      border: solid 2px #bd2727;
      width: 14px;
      height: 14px;
    ` :
    `
      background-color: black;
    `
  }
`

function Carossel({carosselItems}) {
  const [currentCarItem, setCurrentCarItem] = useState(carosselItems[0]);
  
  return (
    <CarosselWrapper>
      <div>{currentCarItem[0]}<span>{currentCarItem[1]}</span></div>
      <CarosselNavigators>
        {carosselItems.map((item, index) => 
          <CarosselNavigator key={`${item}-${index}`} isActive={currentCarItem === item} onClick={() => setCurrentCarItem(item)}></CarosselNavigator>
        )}
      </CarosselNavigators>
    </CarosselWrapper>
    
    
  );
}

Carossel.protoTypes = {
  carosselItems: Proptypes.array,
}

export default Carossel;