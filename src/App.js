import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/image-slider";
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

      {/* Image Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"4"}
      />
    </div>
  );
}

export default App;
