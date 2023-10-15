import { Card } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Card);

function AnimatedCardDemo() {
  const ghost = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ghost,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#444", "#222"]
  );

  return (
    <>
      <MotionBox
        padding={8}
        layout
        style={{
          scale,
          position: "sticky",
          backgroundColor,
        }}
        bottom={8}
        margin='auto'
      >
        <h2>Demo Card</h2>
        <p>This card will animate based on the scroll position.</p>
      </MotionBox>
      <div
        style={{
          position: "relative",
          top: -100,
          border: "1px dashed red",
          borderRadius: 5,
          marginBottom: -100,
        }}
      >
        <div ref={ghost} style={{ width: "100%", height: 100 }}></div>
      </div>
    </>
  );
}

export default AnimatedCardDemo;
