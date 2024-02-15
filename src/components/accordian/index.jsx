// Single selection
// Multi selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);

  return (
    <div className='wrapper'>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className='item'>
              <div
                onClick={() => handleSingleSelection(item.id)}
                className='title'
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {selected === item.id ? (
                <div className='content'>{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
