import styled from 'styled-components';

export const HeaderUserModalContainer = styled.div`
  max-width: 1440px;
  height: 100%;
  width: 1440px;
  top: 0;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 375px) {
    max-width: 343px;
    width: 343px;
  }
  @media (max-width: 768px) {
    max-width: 704px;
    width: 704px;
  }
`;

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
  position: absolute;
  background-color: #fafafa;
  border-radius: 4px;
  border: 1px solid #8baa36;
  top: 72px;
  right: 20px;
  @media (min-width: 478px) {
    top: 78px;
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
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
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
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #d3d3d3;
  }
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
  width: 100%;
  height: 100%;
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
  padding: 30px 10px;
  @media (min-width: 478px) {
    padding: 50px 40px;
  }
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
  @media (min-width: 478px) {
    width: 14px;
    height: 14px;
    top: 24px;
    right: 24px;
  }
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
  color: #23262a;
  @media (min-width: 478px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;

export const HeaderLogoutModalButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogoutModalLogoutButtonStyled = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  margin-right: 8px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #d3d3d3;
  }
  @media (min-width: 478px) {
    width: 192px;
    padding: 18px 39px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const HeaderLogoutModalCancelButtonStyled = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #23262a;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  @media (min-width: 478px) {
    width: 192px;
    padding: 18px 39px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const HeaderEditModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 200;
`;

export const HeaderEditModalBodyStyled = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const HeaderEditModalContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px 12px;
  @media (min-width: 478px) {
    padding: 50px 40px;
  }
`;

export const HeaderEditModalCloseButtonStyled = styled.button`
  border: none;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  background-color: transparent;
  @media (min-width: 478px) {
    width: 14px;
    height: 14px;
    top: 24px;
    right: 24px;
  }
`;

export const HeaderEditModalStyledImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 50px;
  @media (min-width: 478px) {
    margin-bottom: 52px;
  }
  svg {
    width: 103px;
    height: 103px;
    fill: #d9d9d9;
  }
`;

export const HeaderEditModalStyledImg = styled.img`
  border-radius: 50px;
  width: 103px;
  height: 103px;
`;

export const HeaderEditModalForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderEditModalFileLabel = styled.label`
  position: absolute;
  top: 102px;
  left: 172px;
  @media (min-width: 478px) {
    top: 131px;
    left: 258px;
  }
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderEditModalFileInput = styled.input`
  display: none;
`;

export const HeaderEditModalNameLabel = styled.label`
  position: relative;

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 15px;
    left: 15px;
    right: 0px;
    @media (min-width: 478px) {
      width: 24px;
      height: 24px;
      left: 19px;
      top: 17px;
    }
    color: #23262a;
    &:last-of-type {
      width: 17px;
      height: 17px;
      left: 251px;
      top: 15px;
      @media (min-width: 478px) {
        top: 20px;
        width: 19px;
        height: 19px;
        left: 363px;
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const HeaderEditModalNameInput = styled.input`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  width: 282px;
  height: 48px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  padding-left: 39px;
  padding-right: 42px;
  opacity: 0.8;
  margin-bottom: 24px;
  color: #23262a;
  transition-property: border-color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border-color: #8baa36;
  }
  @media (min-width: 478px) {
    width: 400px;
    height: 58px;
    padding-left: 51px;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const HeaderEditModalSubmitButton = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #d3d3d3;
  }
  width: 282px;
  @media (min-width: 478px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 16px;
    line-height: 18px;
    width: 400px;
  }
`;
