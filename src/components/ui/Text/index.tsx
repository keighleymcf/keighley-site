import styled, { css } from "styled-components";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "p" | "spanFinePrint";
  children: React.ReactNode;
};

const variants = {
  h1: css`
    font-size: 2.8rem;
    font-weight: 700;
    margin: 0 0 48px 0;
  `,
  h2: css`
    font-size: 2.6rem;
    font-weight: 700;
    margin: 24px 0;
  `,
  h3: css`
    font-size: 2rem;
    font-weight: 700;
    margin: 24px 0 12px 0;
  `,
  h4: css`
    font-size: 1.4rem;
    font-weight: 700;
    margin: 12px 0;
  `,
  p: css`
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
    > span {
      font-size: 0.8rem;
      background-color: ${(props) => props.theme.palette.periwinkleLight};
      font-weight: 700;
      padding: 4px;
    }
  `,
  spanFinePrint: css`
    font-size: 0.6rem;
    font-weight: 300;
    line-height: 0.6rem;
    margin: 0;
  `,
};

export const StyledText = styled.span<TextProps>`
  display: inline-block;
  ${(props) => variants[props.variant]}
`;

export const Text: React.FC<TextProps> = ({ variant, children, ...props }) => {
  return (
    <StyledText
      as={variant === "spanFinePrint" ? "span" : variant}
      variant={variant}
      {...props}
    >
      {children}
    </StyledText>
  );
};
