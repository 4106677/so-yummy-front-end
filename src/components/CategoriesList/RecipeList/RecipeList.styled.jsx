import styled from 'styled-components';


export const CardTitle = styled.p`
  position: absolute;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: rgb(34, 37, 42);
  padding: 16px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 245px;
  left: 18px;
  border-radius: 8px;
  width: calc(100% - 36px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardImg = styled.img`
  height: 323px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const CardWrap = styled.li`
  width: 343px;
  height: 323px;
  border-radius: 8px;
  position: relative;
  @media (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media (min-width: 1440px) {
    width: calc((100% - 42px) / 4);
  }
`;

export const CardWrapper = styled.ul``;
export const RecipeTitleWrapper = styled.div``;