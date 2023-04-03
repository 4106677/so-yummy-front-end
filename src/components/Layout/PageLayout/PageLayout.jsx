import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'components/Container/Container';
import { checkWebpSupport } from 'components/Utils/checkWebpSupport';

import * as Styled from './PageLayout.styled';

export function PageLayout({
  children,
  title = 'Default page title',
  headingStyles,
  sectionStyles
}) {
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    checkWebpSupport()
      .then((isWebpSupported) =>
        sectionRef.current.classList.add(isWebpSupported ? 'webp' : 'no-webp')
      )
      .catch((err) => err);
  }, []);

  return (
    <Styled.Section ref={sectionRef} {...sectionStyles}>
      <Container>
        {title ? <Styled.Heading {...headingStyles}>{title}</Styled.Heading> : null}

        {children}
      </Container>

      {/* DECORATIVE SQUARES */}
      <Styled.DecorativeSquare data-1 color="#8BAA36" top="3.375rem" left="14.75rem" />
      <Styled.DecorativeSquare data-2 top="8.5rem" left="44.125rem" />
      <Styled.DecorativeSquare data-3 color="#8BAA36" top="4.125rem" right="4.5rem" />
    </Styled.Section>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  headingStyles: PropTypes.object,
  sectionStyles: PropTypes.object
};
