import { useState } from "react";
import Header from "./components/Header";
import GlobalStyles from "./globalStyles";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
