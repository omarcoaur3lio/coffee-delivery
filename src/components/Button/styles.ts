import styled from "styled-components";
interface ButtonProps {
  variant: "primary" | "secondary";
}

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  /* width: 100%; */

  ${(props) =>
    props.variant === "primary" &&
    `
    padding: 0.75rem 0.5rem;

    font-size: ${props.theme.button.g};
    font-weight: bold;
    line-height: 160%;
    
    color: ${props.theme.colors.white};
    text-transform: uppercase;
    
    border-radius: 6px;
    background-color: ${props.theme.colors.yellow};
    
    transition: background-color 0.2s;
    
    &:hover {
      background-color: ${props.theme.colors.yellowDark};
    }

  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    padding: 0.5rem;
    gap: 4px;

    font-size: ${props.theme.button.m};
    line-height: 160%;
    
    color: ${props.theme.colors.baseText};
    text-transform: uppercase;
    
    border-radius: 6px;
    background-color: ${props.theme.colors.baseButton};
    
    transition: background-color 0.2s;

    svg {
      fill: ${props.theme.colors.purple};
    }
    
    &:hover {
      svg {
        fill: ${props.theme.colors.purpleDark};
      }
      color: ${props.theme.colors.baseSubtitle};
      background-color: ${props.theme.colors.baseHover};
    }

  `}
`;
