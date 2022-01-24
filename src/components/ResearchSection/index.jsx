import { useState } from 'react';
import styled from 'styled-components';
// import filterOn from '../../utils/images/filter-on.png';
// import filterOff from '../../utils.images/filter-off.png';

const StyledResearch = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &>.research-section{
    display: flex;
    width: 50%;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    &>form{
      margin-right: 30px;
      display: flex;
      width: 50%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      &>input{
        box-shadow: 0 0 5px gray;
        height: 40px;
        &[type="research"]{
          border-radius: 10px 0 0 10px;
          width: 65%;
          padding-left: 20px;
          text-decoration: underline;
          font-weight: bold;
        }
        &[type='submit']{
          border-radius:  0 10px 10px 0;
          height: 43px;
        }
      }
    }
  }
`

const StyledFilter = styled.div`
  font-weight: bold;
  cursor: pointer;
`

const FilterOptions = styled.div`
  width: 100%;
  border-top: solid 3px #bd2727;
  margin-top: 5px;
  height: 300px;
  background-color: white;
    box-shadow: 0 5px 3px gray;
  &>nav{
    background-color: black;
    color: white;
    width: 100%;
    padding: 10px 0 10px 0;
    &>ul{
      display: flex;
      justify-content: space-evenly;
    }
  }
`

function ResearchSection(){

  const [filterIsOn, setFilterIsOn] = useState(false);

  return(
    <StyledResearch>
      <div className='research-section'>
        <form action="">
          <input type="research" placeholder='entrez une recherche'/>
          <input type='submit'/>
        </form>
        <StyledFilter>
          <img src="#" alt={filterIsOn ? 'fermer les filtres' : 'ouvrir les filtres'} onClick={() => setFilterIsOn(!filterIsOn)}/>
        </StyledFilter>  
      </div>
      {filterIsOn && 
      <FilterOptions>
        <nav>
          <ul>
            <li>élément de filtre</li>
            <hr />
            <li>élément de filtre</li>
            <hr />
            <li>élément de filtre</li>
            <hr />
            <li>élément de filtre</li>
            <hr />
            <li>élément de filtre</li>
          </ul>
        </nav>
      </FilterOptions>
      }
    </StyledResearch>
  );
}

export default ResearchSection;