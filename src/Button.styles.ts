import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.text.l};
`