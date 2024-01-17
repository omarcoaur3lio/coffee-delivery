import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;

  h3 {
    color: ${(props) => props.theme.colors.baseSubtitle};
    font-size: ${(props) => props.theme.title.xs};
  }

  .formContainer {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .formCard {
      background-color: ${(props) => props.theme.colors.baseCard};
      border-radius: 6px;
      padding: 2.5rem;

      .formCardHeader {
        display: flex;
        gap: 0.5rem;

        span {
          font-size: ${(props) => props.theme.text.m};
          color: ${(props) => props.theme.colors.baseSubtitle};
          line-height: 130%;
        }

        p {
          margin-top: 4px;
          font-size: ${(props) => props.theme.text.s};
        }
      }

      .paymentMethodsForm {
        margin-top: 2rem;
      }

      .inputsContainer {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
          display: flex;
          gap: 0.75rem;
        }
      }
    }
  }

  .cartContentContainer {
    width: 40%;

    .cartContentCard {
      margin-top: 0.75rem;
      background-color: ${(props) => props.theme.colors.baseCard};
      border-radius: 6px 44px;
      padding: 2.5rem;

      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .separator {
        height: 1px;
        width: 100%;
        background-color: ${(props) => props.theme.colors.baseButton};
      }

      .totalContainer {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        div {
          display: flex;
          justify-content: space-between;

          p {
            font-size: ${(props) => props.theme.text.s};
            line-height: 130%;
            color: ${(props) => props.theme.colors.baseText};
          }

          span {
            font-size: ${(props) => props.theme.text.l};
            line-height: 130%;
            font-weight: bold;
            color: ${(props) => props.theme.colors.baseSubtitle};
          }
        }
      }
    }
  }
`;
