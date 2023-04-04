import { LogoFooterSvg } from "../LogoFooterSvg"
import { Nav } from "./Nav/Nav";
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { FollowUs } from './FollowUs/FollowUs';
import {
    LogoFooterLink,
    LogoLinkSpan
} from './Navigation.styled';

export const Navigation = () => {
    return (
        <div>
            <div>
                <LogoFooterLink to="/">
                    <LogoFooterSvg />
                    <LogoLinkSpan>
                        So Yummy
                    </LogoLinkSpan>
                </LogoFooterLink>
                {/* <p>About</p> */}
                <Nav/>
                <SubscribeForm />
            </div>
            <FollowUs/>
        </div>
    )
}