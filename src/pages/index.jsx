import * as React from "react";
import styled from "styled-components";
import { Container } from "../components/common/Container";
import Layout from "../components/common/Layout";
import ravenIcon from "../images/raven-icon.svg";
import theme from "../utils/theme";
import landingBgSm from "../images/landing-sm.png";
import landingBgLg from "../images/landing-lg.png";

const StyledIndexPage = styled.div`
  flex-grow: 1;
  background: radial-gradient(
      158.55% 100.19% at 0% 0%,
      #ffffff 32.29%,
      rgba(255, 255, 255, 0) 79.17%
    ),
    url(${landingBgSm});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media (min-width: ${theme.screens.laptop}) {
    background: radial-gradient(
        158.55% 100.19% at 0% 0%,
        #ffffff 32.29%,
        rgba(255, 255, 255, 0) 79.17%
      ),
      url(${landingBgLg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Brand = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Nimbus Sans, sans-serif;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.grey21};

  margin-top: 10vh;
  margin-bottom: 5vh;

  div.icon-wrapper {
    width: 50px;
  }

  div.title {
    padding: 0 1rem;
    h1 {
      font-weight: 400;
      font-size: 2.3rem;
      font-size: 4.4vh;
      line-height: 44px;
      letter-spacing: 0.15em;

      span {
        text-align: center;
        display: block;
        font-size: 0.6em;
        line-height: 1.4;
        letter-spacing: 0.5em;
      }
    }
  }

  @media (min-width: ${theme.screens.tablet}) {
    margin-top: 7vh;
    padding: 0 1.8rem;

    div.icon-wrapper {
      width: 109px;
    }

    div.title {
      h1 {
        font-size: 6.3vh;
        line-height: 1.5;
        span {
        }
      }
    }
  }

  @media (min-width: ${theme.screens.laptop}) {
    margin-top: 16vh;
    margin-bottom: 9vh;

    div.icon-wrapper {
    }

    div.title {
      h1 {
        span {
        }
      }
    }
  }
`;

const Message = styled.div`
  text-align: center;
  color: ${theme.colors.grey21};
  p.community {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 4.2vh;
  }

  p.coming-soon {
    font-size: 1.6rem;
    margin-bottom: 22vh;
  }

  @media (min-width: ${theme.screens.tablet}) {
    margin-top: 6vh;
    margin-bottom: 24vh;
    p.community {
      max-width: 80%;
      margin: 0 auto;
      font-size: 3vh;
    }

    p.coming-soon {
      font-size: 4vh;
      margin-top: 6vh;
    }
  }

  @media (min-width: ${theme.screens.laptop}) {
    p.community {
    }

    p.coming-soon {
    }
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledIndexPage>
        <Container>
          <Brand>
            <div className="icon-wrapper">
              <img src={ravenIcon} alt="Raven silhouette" />
            </div>
            <div className="title">
              <h1>
                Ravencoin <span>Foundation</span>
              </h1>
            </div>
          </Brand>
          <Message>
            <p className="community">
              A new community landing to assist the future of Ravencoin to soar.
            </p>
            <p className="coming-soon">Coming Soon</p>
          </Message>
        </Container>
      </StyledIndexPage>
    </Layout>
  );
};

export default IndexPage;
