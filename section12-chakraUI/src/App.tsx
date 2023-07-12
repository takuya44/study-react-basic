import "./App.css";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// 自身で作成したコンポーネント
import theme from "./theme/theme";
import Router from "./router/Router";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <Button colorScheme="teal">ボタン</Button>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
