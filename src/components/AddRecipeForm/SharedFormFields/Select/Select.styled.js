import styled, { css } from 'styled-components';

const COLORS = {
  accent: '#8BAA36',
  text: 'rgba(0, 0, 0, .3)',
  bgDefault: '#ffffff',
  bgAlternative: '#ececec',
  selectedOption: '#23262A',
  border: '#E0E0E0',
  scroll: '#E7E5E5',
};

const selectAppearencesMap = {
  filled: `
      background-color: ${COLORS.bgAlternative};
      padding: 0.75rem 1rem 0.75rem 0.5rem;

        & input {
          display: inline-block;
          width: 60%;
          height: 100%;

          background-color: inherit;
          color: ${COLORS.selectedOption};

          &:focus-within {
            outline: none;
          }
        }

        & strong {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
    `,
  outlined: `
      background-color: transparent;
      padding-bottom: 1rem;
    `,
};

export const DropdownList = styled.ul`
  // Size & position
  position: absolute;
  top: 100%;
  right: 0;

  // Styles
  background-color: ${COLORS.bgDefault};
  border-radius: 6px;
  z-index: ${({ zIndex }) => zIndex};

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

  &:hover,
  &.selected {
    color: ${COLORS.accent};
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  width: ${({ selectWidth }) => selectWidth};
  height: ${({ selectHeight }) => selectHeight};
  min-width: ${({ selectWidth }) => selectWidth ?? '80px'};
  border-radius: 5px;
  cursor: pointer;
  outline: none;

  ${({ variant }) => selectAppearencesMap[variant]}

  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    right: ${({ chevronOffset }) => chevronOffset};
    width: 1.25rem;
    height: 1.25rem;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 1L6 6L1 1' stroke='%238BAA36' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");

    background-position: 50%;
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }

  &.is-active {
    color: white;

    & ${DropdownList} {
      box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
      max-height: 162px;
      width: fit-content;
      overflow-y: auto;
      padding: 0.5rem 0;
    }
  }
`;

export const SelectedOption = styled.strong`
  display: block;
  margin-right: 0.5rem;
  text-align: ${({ selectedOptionAlign }) => selectedOptionAlign};
  font-weight: 400;
  font-size: ${({ selectedOptionFontSize }) => selectedOptionFontSize};
  line-height: 1;
  color: ${COLORS.selectedOption};
`;

export const OuterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${({ variant }) =>
    variant === 'outlined' && `border-bottom: 1px solid ${COLORS.border}`}
`;

export const Input = styled.input`
  display: block;
  border: none;
  background-color: inherit;
  font: inherit;
  text-align: ${({ inputTextAlign }) => inputTextAlign};
  color: ${COLORS.text};

  &:read-only {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0.25rem;
  left: 0.25rem;
  font-size: 0.6rem;
  color: #f94b4b;

  ${({ asFieldGroup }) =>
    asFieldGroup &&
    css`
      bottom: -0.85rem;
      left: 0.75rem;
    `}
`;
