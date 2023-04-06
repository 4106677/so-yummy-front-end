import styled from 'styled-components';

export const ButtonSkewStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  
  font-weight: '400';
  line-height: '-0.24px';
  font-size: 14px;

  color: ${p =>
    p.styled === 'black'
      ? '#FAFAFA'
      : p.styled === 'olive'
      ? '#FAFAFA'
      : p.styled === 'other'
      ? '#22252A'
      : p.styled === 'transparent'
      ? '#23262A'
      : 'red'};

  padding: ${p =>
    p.location === 'favorite' || p.location === 'recipes'
      ? '6px 14px'
      : '16px 30px'};

  background-color: ${({ styled }) => {
    switch (styled) {
      case 'black':
        return '#22252A';
      case 'olive':
        return '#8BAA36';
      case 'transparent':
        return 'transparent';
      case 'other':
        return 'transparent';
      default:
        return 'red';
    }
  }};
  outline: none;
  /* border: none; */

  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  text-align: center;

  border: ${({ styled }) => {
    switch (styled) {
      case 'other':
        return `1px solid '#8BAA36'`;
      case 'transparent':
        return `1px solid '#FAFAFA'`;
      default:
        return '1px solid transparent';
    }
  }};

  cursor: pointer;
  transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';

  &:hover {
    color: ${({ styled}) => {
      switch (styled) {
        case 'black':
          return '#FAFAFA';
        case 'olive':
          return '#FAFAFA';
        case 'other':
          return '#FAFAFA';
        case 'transparent':
          return '#8BAA36';
        default:
          return 'red';
      }
    }};
    background-color: ${({ styled }) => {
      switch (styled) {
        case 'black':
          return '#8BAA36';
        case 'olive':
          return '#22252A';
        case 'transparent':
          return 'transparent';
        case 'other':
          return '#8BAA36';
        default:
          return 'red';
      }
    }};
    border: ${({ styled, theme }) => {
      return styled === 'transparent'
        ? `1px solid '#8BAA36'`
        : '1px solid transparent';
    }};
  }

  @media screen and (min-width: 768px) {
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '12px 32px'
        : '16px 32px'};
    min-width: 130px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: '1.12';
    padding: ${p =>
      p.location === 'favorite' || p.location === 'recipes'
        ? '18px 44px'
        : '20px 40px'};
    min-width: 160px;
  }
`;
