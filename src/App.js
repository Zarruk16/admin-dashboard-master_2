import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "./contexts/AppContext";
import Splash from "./pages/auth/Splash";
import Login from "./pages/auth/Login";
import { useState } from "react";
import Base from "./routes/Base";

function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser, setIsReady }}>
      <ToastContainer />
      {!isReady ? <Splash /> : user ? <Base /> : <Login />}
    </AppContext.Provider>
  );
}

export default App;
