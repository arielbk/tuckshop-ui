import { Box, Card, CardProps } from '@chakra-ui/react';
import React from 'react';

interface Props {
  emoji: string;
  children: React.ReactNode;
}

function EmojiCard({ emoji, children, ...rest }: Props & CardProps) {
  return (
    <Card bg="black" overflow={'hidden'} zIndex={0} {...rest}>
      <Box
        position="absolute"
        left={0}
        width="100%"
        height="100%"
        zIndex="0"
        _before={{
          content: `"${emoji}"`,
          background: 'black',
          position: 'absolute',
          top: '50%',
          left: '50%',
          fontSize: 1100,
          transform: 'translateX(-50%) translateY(-50%)',
          filter: 'brightness(60%)',
        }}
      />
      <Box
        px={8}
        py={4}
        gap={{ base: 0, md: 12 }}
        zIndex={1}
        display="flex"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        overflow={'hidden'}
        borderRadius={6}
        border="1px solid transparent"
        backdropFilter={'blur(80px) brightness(120%)'}
        background={`padding-box linear-gradient(rgb(20 20 20 / 0.8), rgb(20 20 20))`}
      >
        <Box
          alignItems="center"
          justifyContent={'center'}
          fontSize="100px"
          width="200px"
          display="flex"
          aspectRatio={'1/1'}
        >
          {emoji}
        </Box>
        <Box
          zIndex={1}
          height="100%"
          textAlign={{ base: 'center', md: 'left' }}
        >
          {children}
        </Box>
      </Box>
    </Card>
  );
}

export default EmojiCard;
