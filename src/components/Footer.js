import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components/macro';

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    position: fixed;
    height: 30px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color:rgb(233, 231, 231);
    color: black;
    margin-bottom: 0%;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 50px;
`;

const Footer = () => {
    return (
        <Row>
            <Left>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1' style={{textDecoration: 'none'}}>About</a></li>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000100-0000000000&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' style={{textDecoration: 'none'}}>Advertising</a></li>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://www.google.com/intl/en_in/business/' style={{textDecoration: 'none'}}>Business</a></li>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://www.google.com/search/howsearchworks/?fg=1' style={{textDecoration: 'none'}}>How Search Works</a></li>
            </Left>
            <Right>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://policies.google.com/privacy?hl=en-IN&fg=1' style={{textDecoration: 'none'}}>Privacy</a></li>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 11px"}}><a href='https://policies.google.com/terms?hl=en-IN&fg=1' style={{textDecoration: 'none'}}>Terms</a></li>
                <li style={{listStyleType: "none", display: "inline-block", padding: "12px 25px"}}>Settings</li>
            </Right>
        </Row>
    );
  };
  
  export default Footer;