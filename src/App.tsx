import { Box, Heading } from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";
import "./App.css";
import EmojiCard from "./components/EmojiCard";
import SlotCard from "./components/SlotCard";
import { getRandomEmoji } from "./utils/generateEmoji";

function App() {
  return (
    <Box mx={16}>
      <Heading as='h1' fontSize={48} my={16}>
        Born to roll
      </Heading>
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({ count: 1, units: "paragraph" });
        const emoji = getRandomEmoji();
        return (
          <EmojiCard
            emoji={emoji}
            my={4}
            background={"Background"}
            width='100%'
          >
            {dummyText}
          </EmojiCard>
        );
      })}
      <SlotCard transitionDistance={500} />
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({ count: 1, units: "paragraph" });
        const emoji = getRandomEmoji();
        return (
          <EmojiCard
            emoji={emoji}
            my={4}
            background={"Background"}
            width='100%'
          >
            {dummyText}
          </EmojiCard>
        );
      })}
    </Box>
  );
}

export default App;
