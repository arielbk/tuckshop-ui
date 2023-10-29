import { Card, Heading, Text } from '@chakra-ui/react';
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const MotionBox = motion(Card);

interface Props {
  transitionDistance?: number;
}

function CardSlot({ transitionDistance = 100 }: Props) {
  const ghost = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ghost,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const boxShadowY = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const boxShadowBlur = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const boxShadow = useMotionTemplate`0 ${boxShadowY}px ${boxShadowBlur}px rgba(0 0 0 / 0.4)`;

  return (
    <>
      <MotionBox
        display="flex"
        padding={8}
        layout
        style={{
          scale,
          position: 'sticky',
          boxShadow,
        }}
        bottom={8}
        margin="auto"
        mb={8}
        background={`
          padding-box linear-gradient(rgb(20 20 20), rgb(20 20 20)),
          border-box linear-gradient(170deg, rgb(155 155 155), rgb(20 20 20))
        `}
        border="2px solid transparent"
      >
        <Heading as="h3" mb={2}>
          🧾 Menu cart
        </Heading>
        <Text color={'rgb(255 255 255 / 0.6)'}>
          Experimentation with some Framer Motion effects.
        </Text>
      </MotionBox>
      <div
        style={{
          position: 'relative',
          top: -transitionDistance,
          marginBottom: -transitionDistance,
          pointerEvents: 'none',
        }}
      >
        <div
          ref={ghost}
          style={{ width: '100%', height: transitionDistance }}
        ></div>
      </div>
    </>
  );
}

export default CardSlot;
