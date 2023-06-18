import "./App.css";
import CssModules from "./components/CssModules";
import InlineStyle from "./components/InlineStyle";
import StyledJSX from "./components/Styled";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
    </div>
  );
}

export default App;
