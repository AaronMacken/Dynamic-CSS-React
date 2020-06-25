import React, { useState } from "react";

// some simple data with a title & description
const data = [
  {
    id: 1,
    title: "Item 1",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique corporis aliquid consequatur magnam cum placeat?",
  },
  {
    id: 2,
    title: "Item 2",
    desc: " adipisicing elit. Similique corporis aliquid consequatur magnam cum placeat?",
  },
  {
    id: 1,
    title: "Item 3",
    desc: "or, sit amet consectetur adipisicing elit. Similique corporis aliquid consequatur",
  },
];

const AccordionThing = () => {
  // state that will be used to control what description is shown
  let [value, setValue] = useState(0);
  // destructuring data.desc from the above array
  // we will show the discription from whatever array index the "value" state is pointing to
  // value is controlled by the button onClicks
  const { desc } = data[value];

  // map through the data above to create three buttons
  let buttons = data.map((item, index) => {
    return (
      <button
        key={index}
        // each button has an index
        // if the button's index matches the state "value" then we will also append the class "active-btn"
        // to the list of classes
        className={`btn ${index === value && "active-btn"}`}
        // clicking a button changes the state to whatever that button's index value is
        onClick={() => setValue(index)}
      >
        {item.title}
      </button>
    );
  });
  return (
    <div>
      {/* show all buttons */}
      <div className="btn-container">{buttons}</div>
      {/* show data.desc[0] by default -> will change to 0, 1, or 2 based off of the button triggering
      the useState hook */}
      <p>{desc}</p>
    </div>
  );
};

export default AccordionThing;
