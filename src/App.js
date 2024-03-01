import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className='App'>
      {/* Accordian Comp. */}
      <Accordian />

      {/* Random Color Comp. */}
      <RandomColor />

      {/* Star Rating Comp. */}
      <StarRating />
    </div>
  );
}

export default App;
