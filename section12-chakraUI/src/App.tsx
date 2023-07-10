import React from "react";
import "./App.css";
import { Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Button>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
