import React, { useContext } from "react";
import { userContext } from "./utils/Context";
import Navbar from "./components/Navbar";
import Routing from "./utils/Routing";
import "./App.css";

function App() {
  const [products] = useContext(userContext);
  if (products === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
