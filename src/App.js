import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from "./Routers";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Router />
    </BrowserRouter>
  );
}

export default App;
