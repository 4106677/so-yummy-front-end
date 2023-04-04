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
            <FollowUsLink>
                <Facebook/>
            </FollowUsLink>

            <FollowUsLink>
                <Instagram/>
            </FollowUsLink>

            <FollowUsLink>
                <Twitter/>
            </FollowUsLink>

            <FollowUsLink>
                <YouTube/>
            </FollowUsLink>
        </FollowUsNav>
    )
}