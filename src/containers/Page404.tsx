import React, { FC } from 'react';
import { Box, styled } from '@mui/material';
import Page from 'components/helmet-page';
import { ROUTES_NAVIGATE } from 'routes/paths';

interface IPage404Props {
  [key: string]: unknown;
}

const stars = [...Array(47)];

const StyledPage404 = styled(Box)`
  height: 100vh;
  width: 100%;

  & .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  & .container-star {
    background-image: linear-gradient(to bottom, #292256 0%, #8446cf 70%, #a871d6 100%);

    &::after {
      content: '';
      background: radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(15, 10, 38, 0.2) 100%
      );
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    & .star-1 {
      position: absolute;
      border-radius: 50%;
      background: #fff;
      -webkit-animation: twinkle 5s infinite ease-in-out;
      animation: twinkle 5s infinite ease-in-out;

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        transform: rotate(90deg);
        position: absolute;
        background: #fff;
        border-radius: 50%;
      }

      &::before {
        content: '';
        background: radial-gradient(
          ellipse at center,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        border-radius: 50%;
        top: -20%;
        left: -50%;
      }

      ${stars.map(
        (_, index) => `
    &:nth-of-type(${index + 1}) {
      top: ${Math.round(Math.random() * 100)}vh;
      left: ${Math.round(Math.random() * 100)}vw;
      width: ${Math.round(Math.random() * 10)}px;
      height: ${Math.round(Math.random() * 5)}px;
      -webkit-animation-delay: ${Math.round(Math.random() * 10)}s;
      animation-delay: ${Math.round(Math.random() * 10)}s;

      &::before {
        content:'';
        width: 10px;
        height: 10px;
        top: -250%;
      }
    }
  `
      )}
    }

    & .wing-left-top {
      border-bottom: 20px solid #7979a8;
      transform: translate3d(0, 0, 0) rotate(-60deg);
      -webkit-animation: wingLeftTop 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
      animation: wingLeftTop 1.3s cubic-bezier(0.45, 0, 0.5, 0.95) infinite;
    }
  }

  & .bird-amin {
    &:first-of-type(1) {
      -webkit-animation: bird1 30s linear infinite forwards;
      animation: bird1 30s linear infinite forwards;
    }
    &:first-of-type(2) {
      -webkit-animation: bird2 30s linear infinite forwards;
      animation: bird2 30s linear infinite forwards;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
    }
    &:first-of-type(3) {
      -webkit-animation: bird3 30s linear infinite forwards;
      animation: bird2 30s linear infinite forwards;
      -webkit-animation-delay: 5s;
      animation-delay: 5s;
    }
    &:first-of-type(2) {
      -webkit-animation: bird6 30s linear infinite forwards;
      animation: bird2 30s linear infinite forwards;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
    }
  }

  & .bird {
    height: 100vh;
    width: 100%;
    position: relative;

    & .bird-amin {
      position: absolute;
      animation-duration: 10s; /* Adjust the duration as needed */
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    /* Define the bird flying animation */
    @keyframes birdFly {
      0% {
        transform: translateX(-10%) translateY(20vh) rotate(0deg);
      }
      25% {
        transform: translateX(25%) translateY(-10vh) rotate(-10deg);
      }
      50% {
        transform: translateX(60%) translateY(0) rotate(0deg);
      }
      75% {
        transform: translateX(85%) translateY(10vh) rotate(10deg);
      }
      100% {
        transform: translateX(110%) translateY(20vh) rotate(0deg);
      }
    }
  }
`;

const Page404: FC<IPage404Props> = () => {
  return (
    <Page
      title="Page 404"
      canoncial={ROUTES_NAVIGATE.page404}
      description="Oops! Page not found. Explore our site or contact us for assistance. We're here to help you find what you're looking for."
    >
      <StyledPage404>
        <div className="container container-star">
          {stars.map((_, i) => (
            <div className="star-1" key={i} />
          ))}
        </div>

        <div className="bird bird-amin">
          <div className="bird-container">
            <div className="wing wing-left">
              <div className="wing-left-top" />
            </div>

            <div className="wing wing-right">
              <div className="wing-right-top" />
            </div>
          </div>

          <div className="container-title">
            <div className="title">
              <div className="number">4</div>
              <div className="moon">
                <div className="face">
                  <div className="mounth" />
                  <div className="eyes">
                    <div className="eye-left" />
                    <div className="eye-right" />
                  </div>
                </div>
              </div>
              <div className="number">4</div>
            </div>
            <div className="subtitle">Oops. Looks like you took a wrong turn.</div>
            <button>Go back</button>
          </div>
        </div>
      </StyledPage404>
    </Page>
  );
};

export default Page404;
