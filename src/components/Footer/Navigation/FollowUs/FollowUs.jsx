import {
    Facebook,
    Instagram,
    Twitter,
    YouTube
} from './FollowUsIcon';
import { FollowUsNav, FollowUsLink } from './FollowUs.styled';

export const FollowUs = () => {
    return (
        <FollowUsNav>
            <FollowUsLink to='https://facebook.com'>
                <Facebook/>
            </FollowUsLink>

            <FollowUsLink to='https://www.instagram.com/'>
                <Instagram/>
            </FollowUsLink>

            <FollowUsLink to='https://twitter.com/'>
                <Twitter/>
            </FollowUsLink>

            <FollowUsLink to="https://www.youtube.com">
                <YouTube/>
            </FollowUsLink>
        </FollowUsNav>
    )
}