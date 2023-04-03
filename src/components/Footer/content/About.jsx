import {AboutList,AboutItem } from './About.styled'

export const About = () => {
    return (
        <AboutList>
            <AboutItem>Database of recipes that can be replenished </AboutItem>
            <AboutItem>Flexible search for desired and unwanted ingredients</AboutItem>
            <AboutItem>Ability to add your own recipes with photos</AboutItem>
            <AboutItem>Convenient and easy to use</AboutItem>
        </AboutList>
    )
}