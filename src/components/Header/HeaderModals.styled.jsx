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
  z-index: 200;
`;


export const HeaderUserModalBodyStyled = styled.div`
  position: fixed;
  background-color: #fafafa;
  border-radius: 4px;
  border: 1px solid #8baa36;
  top: 72px;
  right: 40px;
  @media (min-width: 478px) {
    top: 78px;
    right:10px;
  }
  @media (min-width: 1680px) {
    right: 340px;
  }
`;


export const HeaderUserModalContainerStyled = styled.div`
  padding: 18px;
`;

export const HeaderUserModalEditButton = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.6;
  color: #23262a;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  svg {
    margin-left: 37px;
    width: 14px;
    height: 14px;
    @media (min-width: 478px) {
      margin-left: 53px;
    }
  }
  @media (min-width: 478px) {
   margin-bottom: 32px;
  }
`;

export const HeaderUserModalLogoutButton = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 12px 24px;
  width: 125px;
  svg {
    margin-left: 4px;
    width: 17px;
    height: 17px;
  }
  @media (min-width: 478px) {
    width: 141px;
    padding: 12px 32px;
  }
`;


export const HeaderLogoutModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 200;
`;


export const HeaderLogoutModalBodyStyled = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;


export const HeaderLogoutModalContainerStyled = styled.div`
  padding: 44px 24px;
`;

export const HeaderLogoutModalCloseButtonStyled = styled.button`
  border: none;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  background-color: transparent;
`;

export const HeaderLogoutModalTextStyled = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
`;

export const HeaderLogoutModalButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderLogoutModalLogoutButtonStyled = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FAFAFA;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  margin-right: 8px;
`;

export const HeaderLogoutModalCancelButtonStyled = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #23262A;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
`;






