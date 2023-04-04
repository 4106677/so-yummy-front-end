import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.strong`
  display: block;
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 1;

  letter-spacing: -0.015rem;
`;

export function BlockTitle({
  title,
  textAlign = 'left',
  fontSize = '1.5rem',
  color = '#3E4462',
  ...restProps
}) {
  return (
    <Title textAlign={textAlign} fontSize={fontSize} color={color} {...restProps}>
      {title}
    </Title>
  );
}

BlockTitle.propTypes = {
  title: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  color: PropTypes.string,
  fontSize: PropTypes.string
};
