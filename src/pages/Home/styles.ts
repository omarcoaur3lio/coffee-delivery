import styled from "styled-components";

export const MainContainer = styled.div`
  margin: auto;
  /* background-color: #ff0; */
  height: calc(100vh - 118px);
  margin: auto 10rem;
  display: grid;
  grid-template-columns: 55% 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  .mainContentContainer {
    /* background-color: #f00; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }
  .textContainer {
    flex-direction: column;
    justify-content: center;
    align-items: start;

    h1 {
      font-family: "Baloo 2", sans-serif;
      font-weight: 900;
      max-width: 588px;
      font-size: ${(props) => props.theme.title.xl};
      color: ${(props) => props.theme.colors.baseTitle};
      line-height: 130%;
    }

    h1 + p {
      color: ${(props) => props.theme.colors.baseSubtitle};
      font-size: ${(props) => props.theme.text.l};
      margin-top: 1rem;
      line-height: 130%;
      max-width: 588px;
    }

    .itemsContainer {
      margin-top: 4.125rem;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;

      span {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: ${(props) => props.theme.colors.background};
        background-color: ${(props) => props.theme.colors.yellowDark};
      }

      p {
        font-size: ${(props) => props.theme.text.m};
      }
    }
  }
`;
