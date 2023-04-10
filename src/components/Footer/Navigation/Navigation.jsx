import { LogoFooterSvg } from "../LogoFooterSvg"
import { Nav } from "./Nav/Nav";
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { FollowUs } from './FollowUs/FollowUs';
import {
    LogoFooterLink,
    LogoLinkSpan,
    AboutList,
    AboutItem,
    WrapperLogoAboutNav,
    WrapperLogoNavSub
} from './Navigation.styled';

export const Navigation = () => {
    return (
        <div>
            <WrapperLogoNavSub>
                <WrapperLogoAboutNav>
                    <div>
                    <LogoFooterLink to="/main">
                        <LogoFooterSvg />
                        <LogoLinkSpan>
                            So Yummy
                        </LogoLinkSpan>
                    </LogoFooterLink>
                    
                    <AboutList>
                        <AboutItem>Database of recipes that can be replenished </AboutItem>
                        <AboutItem>Flexible search for desired and unwanted ingredients</AboutItem>
                        <AboutItem>Ability to add your own recipes with photos</AboutItem>
                        <AboutItem>Convenient and easy to use</AboutItem>
                        </AboutList>
                    </div>

                    <Nav />
                    
                </WrapperLogoAboutNav>

                <SubscribeForm />
                
            </WrapperLogoNavSub>

            
            <FollowUs/>
        </div>
    )
}