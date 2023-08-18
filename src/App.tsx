import "./App.css";
import { decrement, increment } from "./reducers/counterSlice";
import { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";


function App() {
   const count = useSelector((state: RootState) => state.counterSlice.value);
   const dispatch = useDispatch();
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
