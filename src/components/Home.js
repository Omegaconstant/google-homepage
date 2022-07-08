import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);

  img {
    width: 272px;
    height: 92px;
    margin-top: auto;
  }
`;

const SearchSection = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 14px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 24px;
  z-index: 3;
  height: 44px;
  margin: 15px auto;
  max-width: 560px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  padding-top: 5px;
  top: 53px;
  z-index: 0;

  button {
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Roboto, arial, sans-serif;
    font-size: 14px;
    margin: 11px 5px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;
  }
`;

const SearchBox = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;

  & svg {
    fill: #9aa0a6;
  }
`;

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;

const MicBox = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: 0;
  background: transparent;
  outline: none;
  padding: 0 8px;
  width: 20px;
  line-height: 44px;
  height: 44px;

  svg {
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
`;

const Language = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const Home = () => {
  return (
    <Container>
      <LogoSection>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='google-logo'
        />
      </LogoSection>
      <SearchSection>
        <Form action='/' method='GET' role='search'>
          <Search>
            <SearchBox>
                <SearchIcon />
            </SearchBox>
            <SearchInput type='text' />
            <MicBox>
                <MicIcon />
            </MicBox>
          </Search>
        </Form>
        <ButtonSection>
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </ButtonSection>
      </SearchSection>
      <Language>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}>Google offered in:</li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwi_1JO93-n4AhVtT2wGHX2aD8MQ2ZgBCA4' style={{textDecoration: 'none'}}>हिन्दी</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCA8' style={{textDecoration: 'none'}}>বাংলা</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBA' style={{textDecoration: 'none'}}>తెలుగు</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBE' style={{textDecoration: 'none'}}>मराठी</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBE' style={{textDecoration: 'none'}}>தமிழ்</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBM' style={{textDecoration: 'none'}}>ગુજરાતી</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBQ' style={{textDecoration: 'none'}}>ಕನ್ನಡ</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBU' style={{textDecoration: 'none'}}>മലയാളം</a></li>
        <li style={{listStyleType: "none", margin: "0 5px", alignItems: "center", fontSize: "12px"}}><a href='https://www.google.com/setprefs?sig=0_fNUCOKhSiXens67lJ8xXcWpzOqg%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwj1mdmk4en4AhWwT2wGHZzUB1YQ2ZgBCBY' style={{textDecoration: 'none'}}>ਪੰਜਾਬੀ</a></li>
      </Language>
    </Container>
  );
};

export default Home;
