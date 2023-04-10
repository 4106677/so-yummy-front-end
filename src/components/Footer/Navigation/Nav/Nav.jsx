import {
    FooterNav,
    FooterNaviLink
} from './Nav.styled'

export const Nav = () => {
    return (
        <FooterNav>
            <FooterNaviLink to={'search'}>Ingredients</FooterNaviLink>
            <FooterNaviLink to={'add-recipe'}>Add recipes</FooterNaviLink>
            <FooterNaviLink to={'my'}>My recipes</FooterNaviLink>
            <FooterNaviLink to={'favorite'}>Favorite</FooterNaviLink>
            <FooterNaviLink to={'shopping-list'}>Shopping list</FooterNaviLink>
        </FooterNav>
    )
}