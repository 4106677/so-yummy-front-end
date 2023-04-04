import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FooterNav = styled.nav`
    width: 89px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 32px;
`
export const FooterNaviLink = styled(NavLink)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: white;
    margin-bottom 14px;
    
`
