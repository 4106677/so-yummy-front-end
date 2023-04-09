import styled from 'styled-components';

export const DecorativeSquare = styled.div`
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  aspect-ratio: 1 / 1;
  border-radius: 3px;
  background-color: ${({ color }) => color ?? '#22252A'};
  transform: rotate(-25deg);
  &[data-1] {
    top: 76px;
    left: 36%;
  }
  &[data-2] {
    top: 141px;
    left: 67%;
    width: 0.35rem;
    height: 0.35rem;
  }
  &[data-3] {
    top: 108px;
    right: 5%;
  }
  @media screen and (min-width: 768px) {
    width: 0.875rem;
    height: 0.875rem;
    &[data-1] {
      top: 85px;
      left: 219px;
    }
    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;
      top: 155px;
      left: 57%;
    }
    &[data-3] {
      top: 98px;
      right: 5%;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 0.875rem;
    height: 0.875rem;
    &[data-1] {
      top: 116px;
      left: 328px;
    }
    &[data-2] {
      width: 0.65rem;
      height: 0.65rem;
      top: 199px;
      left: 57%;
    }
    &[data-3] {
      top: 129px;
      right: 10%;
    }
  }
`;

export const CatigoryHeader = styled.h1`
  font: 'Poppins';
  font-weight: 600;
  font-size: 28px;
  color: #001833;
  margin-bottom: 3.125rem; 
   padding: 114px 16px 60px 16px;
  @media (min-width: 768px) {
    font-size: 32px;
     margin-bottom: 2.5rem; 
    padding: 136px 32px 60px 32px; 
  }
  @media (min-width: 1440px) {
    font-size: 44px;
     margin-bottom: 3.125rem; 
     padding: 164px 100px 110px 100px; 
  }
`;



// import styled from 'styled-components'

// export const PageContainer = styled.div`
// background: #FFFFFF;
// `;

// export const Title = styled.h2`
// font-family: 'Poppins';
// font-style: normal;
// font-weight: 600;
// font-size: 28px;
// line-height: 1;
// padding: 114px 16px 60px 16px;
// color: #001833;

// @media screen and (min-width: 768px) {
//    font-size: 32px;
//    padding: 136px 32px 60px 32px;
//   }
//   @media screen and (min-width: 1440px) {
//     font-size: 44px;
//     padding: 164px 100px 110px 100px;
//   }

// `;
