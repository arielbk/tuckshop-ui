import { Box, Card, Heading } from "@chakra-ui/react";
import { loremIpsum } from "lorem-ipsum";
import "./App.css";
import SlotCard from "./components/SlotCard";

function App() {
  return (
    <Box mx={16}>
      <Heading as='h1' mb={8}>
        Born to roll
      </Heading>
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({ count: 1, units: "paragraph" });
        return (
          <Card p={8} my={4} background={"Background"} width='100%'>
            {dummyText}
          </Card>
        );
      })}
      <SlotCard />
      {Array.from({ length: 10 }).map(() => {
        const dummyText = loremIpsum({ count: 1, units: "paragraph" });
        return (
          <Card p={8} my={4} background={"Background"} width='100%'>
            {dummyText}
          </Card>
        );
      })}
    </Box>
  );
}

export default App;
