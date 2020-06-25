// need to import react because we're creating components from data (which also contains FA components)
// import font awesome icons
import React from "react";
import { FaRegMehBlank, FaRegMehRollingEyes, FaRegMeh } from "react-icons/fa";

// data that will be used to create our links
const data = [
  {
    id: 1,
    icon: <FaRegMehBlank className="icon" />,
    url: "https://www.linkedin.com",
  },
  {
    id: 2,
    icon: <FaRegMehRollingEyes className="icon" />,
    url: "https://www.google.com",
  },
  {
    id: 3,
    icon: <FaRegMeh className="icon" />,
    url: "https://www.youtube.com",
  },
];

// create the links with the data
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className="link" target="__blank">
        {link.icon}
      </a>
    </li>
  );
});

// uses the default styling of "links" (all CSS listed in the App.css file)
// if we pass into it a prop called styleClass
// then append that class to the list of CSS classes
// this component can be called whatever we want when we import it
// usage demonstrated in the App.js file
export default (props) => {
  return <ul className={`links ${props.styleClass ? props.styleClass : ""}`}>{links}</ul>;
};
