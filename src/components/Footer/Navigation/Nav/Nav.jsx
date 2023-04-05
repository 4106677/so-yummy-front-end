import {
    FooterNav,
    FooterNaviLink
} from './Nav.styled'

export const Nav = () => {
    return (
        <FooterNav>
            <FooterNaviLink>Ingredients</FooterNaviLink>
            <FooterNaviLink>Add recipes</FooterNaviLink>
            <FooterNaviLink>My recipes</FooterNaviLink>
            <FooterNaviLink>Favorite</FooterNaviLink>
            <FooterNaviLink>Shopping list</FooterNaviLink>
        </FooterNav>
    )
}