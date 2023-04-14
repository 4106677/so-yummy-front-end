import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const FollowUsNav = styled.nav`
    margin-top: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 119px;
    margin-right: auto;
    margin-left: auto;
    @media(min-width: 768px){
        margin-top: 37px;
    }
    @media(min-width: 1440px){
        margin-top: 41px;
    }
`

export const FollowUsLink = styled(NavLink)`
&:hover svg {
  fill: red;
}
`