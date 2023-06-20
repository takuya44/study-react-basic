import "./App.css";
import CssModules from "./components/CssModules";
import InlineStyle from "./components/InlineStyle";
import StyledJSX from "./components/Styled";
import StyledComponents from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
      <StyledComponents />
    </div>
  );
}

export default App;
