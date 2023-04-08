import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  position: relative;
  max-width: 275px;
  width: fit-content;
  box-sizing: border-box;
  height: 51px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 12px 26px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(135, 135, 135, 0.2) 0px 4px 4px;
  border-radius: 26px;

  & nav {
    max-width: 100%;
  }

  @media screen and (min-width: 768px) {
    max-width: 324px;
    height: 55px;
    padding: 14px 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 436px;
    padding: 14px 24px;
  }

  & .MuiPagination-ul {
    margin-top: 0;
    display: flex;
    max-width: 100%;
    flex-wrap: nowrap;
    gap: 0px;
    color: '#656565';
  }

  & .MuiPaginationItem-page {
    color: '#656565';
    padding: 0;
    min-width: 27px;
  }

  & .MuiPaginationItem-icon {
    fill: '#656565';
  }

  & .MuiPaginationItem-ellipsis {
    color: '#656565';
  }

  & .MuiPaginationItem-page.Mui-selected {
    background-color: '#EBF3D4';
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)';
    color: '#23262A';
    width: 27px;
    height: 27px;

    &:hover,
    &:focus {
      background-color: '#22252A';
      color: '#FFFFFF';
    }
  }
`;
