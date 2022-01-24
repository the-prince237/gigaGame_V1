import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 100px;
  background-color: black;
  color: white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>div{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`

function Footer() {
  return(
    <FooterWrapper>
      <div>
      mon footer
      </div> 
    </FooterWrapper>
  );
}

export default Footer;