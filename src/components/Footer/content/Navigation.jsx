export const Navigation = () => {
    return (
        <FooterNav>
            <FooterNaviLink>Ingredients</FooterNaviLink>
            <FooterNaviLink to={'/add'}>Add recipes</FooterNaviLink>
            <FooterNaviLink to={'/my'}>My recipes</FooterNaviLink>
            <FooterNaviLink to={'/favorite'}>Favorite</FooterNaviLink>
            <FooterNaviLink to={'/shopping-list'}>Shopping list</FooterNaviLink>
        </FooterNav>
    )
}