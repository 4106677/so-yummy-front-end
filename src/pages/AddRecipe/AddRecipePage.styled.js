import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 5.25rem;
  }
`;
export const SubWrapper1 = styled.div`
  max-width: 50rem;
  width: 100%;
  margin-bottom: 4.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 6.25rem;
  }
`;
export const SubWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  z-index: 1000;
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #23232380;
  overflow: hidden;

  z-index: 1000;
`;

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  max-width: 375px;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const SuccessMessage = styled.p`
  margin-inline: auto;
  margin-bottom: 2rem;
  color: #8baa36;
  font-weight: 500;
`;
export const SuccessCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  font: inherit;
  padding: 0.5rem;
  border-radius: 10px;

  border: 1px solid #232323;
  background-color: inherit;
  transition: transform 200ms linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
