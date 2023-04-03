import { FooterLogo,FooterLogoText } from "./Logo.styled"

export const Logo = () => {
    return (
        <FooterLogo>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="12" fill="#EBF3D4"/>
                <path d="M10 10.1025V15.5562V15.6662V15.5562C10 17.1133 10.6794 18.492 11.7328 19.3842C12.2479 19.8205 12.5882 20.4097 12.5882 21.0636V30.1668C12.5882 31.1788 13.4579 32.0001 14.5294 32.0001C15.6009 32.0001 16.4706 31.1788 16.4706 30.1668V21.0636C16.4706 20.4097 16.8109 19.8205 17.326 19.3842C18.3794 18.492 19.0588 17.1133 19.0588 15.5562V10.1025V15.5562" stroke="#8BAA36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5293 16.1112V10" stroke="#8BAA36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M31.9999 11.2852C31.9999 10.6106 31.4201 10.063 30.7058 10.063H29.4116C27.2673 10.063 25.5293 11.7045 25.5293 13.7297V21.0631C25.5293 22.6569 26.6125 24.0002 28.1175 24.5049V30.1663C28.1175 31.1784 28.9872 31.9997 30.0587 31.9997C31.1302 31.9997 31.9999 31.1784 31.9999 30.1663V24.7298V11.2852Z" stroke="#8BAA36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {/* <img src="./logo-for-TW.svg" alt="" class="logo-img"/> */}
            <FooterLogoText>So Yummy</FooterLogoText>
        </FooterLogo>
    )
}