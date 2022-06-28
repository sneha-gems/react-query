import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import List from "./pages/List";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
