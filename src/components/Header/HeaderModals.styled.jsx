import styled from 'styled-components';

export const HeaderUserModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;


export const HeaderUserModalBodyStyled = styled.div`
padding: 18px;
`;


export const HeaderUserModalContainerStyled = styled.div`
  position: fixed;
  background-color: #fafafa;
  border-radius: 4px;
  width: 161px;
  height: 130px;
  border: 1px solid #8baa36;
  top: 72px;
  right: 60px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 478px) {
    width: 177px;
    height: 134px;
    top: 78px;
  }
  @media (min-width: 1680px) {
  margin-right: 280px;
  }
`;