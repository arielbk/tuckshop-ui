import { Box, Card, CardBody, CardProps, Divider } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  emoji: string;
  children: React.ReactNode;
}

const StyledCard = styled.div<{ emoji: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before {
    content: "${(props) => props.emoji}";
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1000px;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0.6;
  }
`;

function EmojiCard({ emoji, children, ...rest }: Props & CardProps) {
  return (
    <Card overflow={"hidden"} zIndex={0} {...rest}>
      <StyledCard emoji={emoji} />
      <Box
        zIndex={1}
        display='flex'
        alignItems='center'
        flexDirection={{ base: "column", md: "row" }}
        backdropFilter={"blur(80px)"}
        overflow={"hidden"}
        borderRadius={6}
        border='2px solid transparent'
        background={`padding-box linear-gradient(rgb(20 20 20), rgb(20 20 20))`}
      >
        <Box
          alignItems='center'
          justifyContent={"center"}
          aspectRatio={"1 / 1"}
          fontSize='100px'
          width='200px'
          display='flex'
        >
          {emoji}
        </Box>
        <Divider orientation='vertical' />
        <CardBody
          zIndex={1}
          height='100%'
          textAlign={{ base: "center", sm: "left" }}
        >
          {children}
        </CardBody>
      </Box>
    </Card>
  );
}

export default EmojiCard;
