import PropTypes from 'prop-types';

import * as Styled from './Socials.styled';

const defaultTitle = 'Follow us';

export function Socials({
  icons = Styled.defaultIconsSet,
  title = defaultTitle,
  titleGap = '2.5rem',
  tag = 'h3'
}) {
  return (
    <Styled.Wrapper>
      {title ? (
        <Styled.Title as={tag} titleGap={titleGap}>
          {title}
        </Styled.Title>
      ) : null}

      {icons.length ? (
        <Styled.List>
          {icons.map((Icon, idx) => (
            <Styled.ListItem key={idx}>
              <Styled.Link rel="noopener noreferer" target="_blank">
                <Icon />
              </Styled.Link>
            </Styled.ListItem>
          ))}
        </Styled.List>
      ) : null}
    </Styled.Wrapper>
  );
}

Socials.propTypes = {
  icons: PropTypes.array,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  title: PropTypes.string,
  titleGap: PropTypes.string
};
