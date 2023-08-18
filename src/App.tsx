import "./App.css";
import { decrement, increment } from "./reducers/counterSlice";
import { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import Todos from "./components/Todos/Todos"

function App() {
   
  return (
    <>
      <Todos/>
    </>
  );
}

export default App;
