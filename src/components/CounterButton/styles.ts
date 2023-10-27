import styled from "styled-components";

export const CounterButtonContainer = styled.div`
  display: flex;
  height: 38px;
  border-radius: 6px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.baseButton};

  color: ${(props) => props.theme.colors.baseTitle};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 1rem;
    background-color: transparent;
    border: 0;
    outline: none;

    cursor: pointer;

    transition: opacity 0.2s;

    svg {
      fill: ${(props) => props.theme.colors.purple};
    }

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;
