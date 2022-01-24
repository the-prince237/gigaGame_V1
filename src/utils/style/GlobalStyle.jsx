import {createGlobalStyle} from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
*{
  margin: 0;
  font-family: 'century gothic';
}
body{
  background-color: #ddd;
}
Link, a{
  text-decoration: none;
  color: inherit;
}
input{
  border: none;
  font-weight: bold;
  &[type='submit']{
    background-color: #bd2727;
    color: #ddd;
  }
}
li{
  list-style-type: none;
}
`
function GlobalStyle() {
  return(
    <StyledGlobalStyle />
  );
}

export default GlobalStyle;