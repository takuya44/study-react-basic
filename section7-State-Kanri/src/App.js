import "./App.css";
import Router from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
