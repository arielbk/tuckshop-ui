import { Box, Card, CardProps } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  emoji: string;
  children: React.ReactNode;
}

const StyledCard = styled(motion.div)<{ emoji: string }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  &::before {
    content: "${(props) => props.emoji}";
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 1100px;
    transform: translateX(-50%) translateY(-50%);
    filter: brightness(60%);
  }
`;

function EmojiCard({ emoji, children, ...rest }: Props & CardProps) {
  return (
    <Card bg='black' overflow={"hidden"} zIndex={0} {...rest}>
      <StyledCard emoji={emoji} />
      <Box
        px={8}
        py={4}
        gap={{ base: 0, md: 12 }}
        zIndex={1}
        display='flex'
        alignItems='center'
        flexDirection={{ base: "column", md: "row" }}
        overflow={"hidden"}
        borderRadius={6}
        border='1px solid transparent'
        backdropFilter={"blur(80px) brightness(120%)"}
        background={`padding-box linear-gradient(rgb(20 20 20 / 0.8), rgb(20 20 20))`}
      >
        <Box
          alignItems='center'
          justifyContent={"center"}
          fontSize='100px'
          width='200px'
          display='flex'
          aspectRatio={"1/1"}
        >
          {emoji}
        </Box>
        {/* <Divider orientation='vertical' /> */}
        <Box
          zIndex={1}
          height='100%'
          textAlign={{ base: "center", md: "left" }}
        >
          {children}
        </Box>
      </Box>
    </Card>
  );
}

export default EmojiCard;
