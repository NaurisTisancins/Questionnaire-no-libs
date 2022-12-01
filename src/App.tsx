import { MainContainer } from "./pages/MainContainer";
import { AppContextProvider } from "./context/AppContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <MainContainer />
      </AppContextProvider>
    </div>
  );
}
