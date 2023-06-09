import Router from "./route/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Router />
      <ToastContainer position="bottom-center" autoClose={5000} theme="dark" />
    </div>
  );
}

export default App;
