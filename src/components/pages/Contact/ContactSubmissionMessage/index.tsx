import styled from "styled-components";

import RonSign from "../../../../assets/ron-poop-sign.gif";
import monkeyTyping from "../../../../assets/monkey-typing.gif";
import { Text } from "../../../ui/Text";
import { ExternalLink } from "../../../ui/Link";

type ContactSubmissionMessageProps = {
  error?: boolean;
};

const ContactSubmissionMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 48px;
`;

const ContactSubmissionMessageImage = styled.img`
  max-width: calc(100vw - 24px);
`;

export const ContactSubmissionMessage = ({
  error,
}: ContactSubmissionMessageProps) => {
  return error ? (
    <ContactSubmissionMessageContainer id="contect-error">
      <ContactSubmissionMessageImage
        src={RonSign}
        alt="Ron Swanson holding up a light sign that says 'poop' - source Giphy"
      />
      <Text variant="h4">Something went wrong</Text>
      <Text variant="p">Please try again later</Text>
      <Text variant="p">or send an email the regular way to</Text>
      <ExternalLink href="mailto:contact@keighleymcfarland.me">
        contact@keighleymcfarland.me
      </ExternalLink>
    </ContactSubmissionMessageContainer>
  ) : (
    <ContactSubmissionMessageContainer id="contect-success">
      <ContactSubmissionMessageImage
        src={monkeyTyping}
        alt="Monkey with a headset phone typing at a computer - source Giphy"
      />
      <Text variant="h4">Thanks for contacting me!</Text>
      <Text variant="p">I'll respond as soon as I can</Text>
    </ContactSubmissionMessageContainer>
  );
};
