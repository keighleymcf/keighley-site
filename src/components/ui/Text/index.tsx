import styled, { css } from "styled-components";

type TextProps = { variant: "h1" | "h2" | "h3" | "h4" | "p" | "pFinePrint" };

const variants = {
  h1: css`
    font-size: 4rem;
    font-weight: 700;
  `,
  h2: css`
    font-size: 2.6rem;
    font-weight: 700;
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  h4: css`
    font-size: 1.6rem;
    font-weight: 700;
  `,
  p: css`
    font-size: 1rem;
    font-weight: 300;
    > span {
      font-size: 0.8rem;
      background-color: ${(props) => props.theme.palette.periwinkleLight};
      font-weight: 700;
      padding: 4px;
    }
  `,
  pFinePrint: css`
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 0.8rem;
  `,
};

export const StyledText = styled.span<TextProps>`
  display: inline-block;
  ${(props) => variants[props.variant]}
`;

export const Text: React.FC<TextProps> = ({ variant, children, ...props }) => {
  return (
    <StyledText
      as={variant === "pFinePrint" ? "p" : variant}
      variant={variant}
      {...props}
    >
      {children}
    </StyledText>
  );
};
