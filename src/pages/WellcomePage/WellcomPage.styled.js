import styled from 'styled-components';

import Background from '../../images/WellcomePage/wellcome_desk.jpg';

export const Wrapper = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1600px;
  height: 770px;
  /* margin: 0 auto; */
  /* background-color: #2f303a; */
  text-align: center;
  align-content: 'center';

  /* align-items: center; */
  /* display: flex; */
  color: #fafafa;
  /* width: 1200px;
  height: 600px; */
  /* 
  padding-top: 118px;
  padding-bottom: 118px; */

  /* @include retina {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../images/index/hero/header-mob-2x.jpg);
  }

  @include tablet {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../images/index/hero/header-tablet.jpg);

    @include retina {
      background-image: linear-gradient(
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(../images/index/hero/header-tablet-2x.jpg);
    }
  }

  @include desktop {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(../images/index/hero/header.jpg);
    padding-top: 200px;
    padding-bottom: 200px;

    @include retina {
      background-image: linear-gradient(
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(../images/index/hero/header-2x.jpg);
    }
  } */
`;

export const Container = styled.div`
  width: 540px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  margin-top: 214px;
`;

export const H1 = styled.h1`
  padding-top: 44px;
  margin: 0;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  font-feature-settings: 'liga' off;
`;
export const P = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  text-align: center;
  letter-spacing: -0.02em;
`;

export const Btn = styled.button`
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  background-color: #8baa36;
  border: none;
  color: #fafafa;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const BtnFill = styled.button`
  margin-left: 18px;
  /* position: absolute; */
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  /* background-color: green; */
  /* border: 2px solid #fafafa; */
  box-sizing: border-box;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */

  width: 141px;
`;

export const BCover = styled.div`
  /* position: absolute; */
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  /* padding: 50px 42px; */
  background: white;
  /* border: 2px solid #fafafa; */
  box-sizing: border-box;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */

  width: 141px;
`;
