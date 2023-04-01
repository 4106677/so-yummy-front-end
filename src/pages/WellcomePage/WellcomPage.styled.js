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
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;

  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #8baa36;

  height: 67px;
  width: 184px;
`;

export const BtnFill = styled.button`
  margin-left: 18px;
  /* position: absolute; */
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 2px solid rgb(250, 250, 250);

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 24px; */
  height: 67px;
  width: 141px;
`;
