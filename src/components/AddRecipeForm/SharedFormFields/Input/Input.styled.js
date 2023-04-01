import styled from 'styled-components';

const COLORS = {
  accent: '#8BAA36',
  border: '#E0E0E0',
  inputBg: '#ececec',
  bgDefault: '#ffffff',
  focused: '#cecece',
  text: 'rgba(0, 0, 0, .5)'
};

const inputAppearencesMap = {
  filled: `
    padding: 1rem 0 1rem 1.125rem;
    border-radius: 0.375rem;
    background-color: ${COLORS.inputBg};

    &:focus-within {
      outline: 1px solid ${COLORS.focused};
    }
  `,
  outlined: `
    padding-bottom: 1.25rem;
    border-bottom: 1px solid ${COLORS.border};
    background-color: transparent;

    &:focus-within {
      outline: none;
      border-bottom: 1px solid ${COLORS.accent};
    }
  `
};

export const Input = styled.input.attrs(({ gapFromLabel, height, variant }) => ({
  gapFromLabel,
  height,
  variant
}))`
  display: block;
  width: 100%;
  height: ${({ height }) => height ?? '100%'};

  margin: 0;

  font-size: 1.125rem;
  border: none;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: ${COLORS.text};

  ${({ variant }) => inputAppearencesMap[variant]};

  &:not(:focus-within) {
    cursor: pointer;
  }

  &::placeholder {
    font-size: 16px;
    line-height: inherit;

    letter-spacing: inherit;
    color: inherit;
  }
`;

export const Error = styled.div`
  position: absolute;
`;

//========= DATALIST DROPDOWN ============//
export const DropdownList = styled.ul`
  // Size & position
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  // Styles
  background-color: ${COLORS.bgDefault};
  border-radius: 6px;

  // Hiding
  max-height: 0;
  overflow: hidden;

  // Custom scrollbar
  &::-webkit-scrollbar {
    width: 0.35rem;
  }
  &::-webkit-scrollbar-track {
    background-color: inherit;
  }
  &::-webkit-scrollbar-thumb {
    border-right: 3px solid;
    border-top: 8px solid;
    border-bottom: 8px solid;
    background-color: ${COLORS.scroll};
  }
`;

export const Option = styled.li`
  padding: 0 1.125rem;
  color: ${COLORS.text};
  font-size: 0.85rem;
  line-height: 1.78;
  text-align: ${({ optionAlign }) => optionAlign};

  &:not(:last-child) {
    margin-bottom: ${({ optionGap }) => optionGap};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &.selected {
    color: ${COLORS.accent};
  }
`;

//======== LABEL =============//
export const Label = styled.label`
  position: relative;
  display: block;

  text-transform: capitalize;
`;

// ============= WRAPPER ==========//

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  &.is-active {
    color: white;

    & ${DropdownList} {
      box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
      max-height: 162px;
      overflow-y: auto;
      padding: 0.5rem 0;

      z-index: 3;
    }
  }
`;
